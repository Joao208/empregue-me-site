/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useMemo} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import pagarme from 'pagarme'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'
import {Input, Scope} from '@rocketseat/unform';
import '../../css/inputcamera.css'

import api from '../../services/api'
import Header from '../../components/Header Bussines';

function Feed() {

  const [profile,setProfile] = useState([])
  const [avatar, setAvatar] = useState('')
  const [Text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [saveCard, setSaveCard] = useState(false);
  const [data,setData] = useState('')
  const [card, setCard] = useState({
    holder_name: '',
    number: '',
    expiration_date: '',
    cvv: '',
    id: '',
  })

  function handleChangeCard(e){
    const name = e.target.name.split('.')[1].replace(/card_/, '');;
    const {value} = e.target;

    setCard({
      ...card,
      [name]:value,
      id:''
    });
  }

  async function Post(event) {
    try {
      event.preventDefault()
      setLoading(true)
      const data = new FormData()

      data.append('avatar', avatar)
      data.append('Text', Text)

      await api.post('/bussines/posts', data)

      setLoading(false)
      toast.success('Postado ;)')
      setAvatar(null)
      setText('')
    } catch (e) {
      setLoading(false)
      toast.error('Ops!! Imagem invalida');
    }
  }

  async function handleSubmit(formData) {
    setLoading(true);

    const { card: cardForm } = formData;

    delete formData.card;

    try {
      let cardData = card.id;

      if (!card.id) {
        const client = await pagarme.client.connect({
          encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
        });
        cardData = await client.security.encrypt(cardForm);
      }

      await api.post('/checkout', {
        ...formData,
        amount: 1,
        save_card: saveCard,
        ...(card.id ? { card_id: cardData } : { card_hash: cardData }),
      });
    } catch (err) {
      showError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profilebussinesv')
      
      setProfile(response.data.profile)
    }  
    
    loadSpots()
  }, [] )  
      
  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null
  },[avatar])  

  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <form className="box shadow-sm border rounded bg-white mb-3 osahan-share-post" encType="multipart/form-data">
            <ul className="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a 
                className="nav-link active" 
                id="home-tab" 
                data-toggle="tab" 
                role="tab" 
                aria-controls="home" 
                aria-selected="true"
                ><i className="feather-edit" />Escrever</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 d-flex align-items-center w-100"  href="profile">
                  {profile.map(profile => (
                  <div key={profile._id} className="dropdown-list-image mr-3">
                   <a href="/mycompany-profile"><img alt="responsive-img" className="rounded-circle" src={profile.bussines.avatar} /></a> 
                    <div className="status-indicator bg-success" />
                  </div>
                  ))}
                  <div className="w-100">
                    <textarea 
                    placeholder="Fale sobre sua publicidade..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    defaultValue={""} 
                    value={Text}
                    onChange={event => setText(event.target.value)}  
                    />
                    <textarea 
                    placeholder="Adicione um link..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    defaultValue={""} 
                    value={Text}
                    onChange={event => setText(event.target.value)}  
                    />
                  </div>
                </div>
              </div>
              {!! avatar 
                  && <label
                  id="indexfile"
                  style={{ backgroundImage: `url(${preview})`}}
                  className={avatar ? 'has-avatar' : ''}
                  >
                  </label>
                  }
            </div>
            <div enc className="border-top p-3 d-flex align-items-center">
              <form className="mr-auto">
                <button onClick={
                  async function checkIn(event){
                    try{
                    event.preventDefault()
                    await api.post('/bussines/check/location')
                    toast.success('Check-in postado ;)');
                    }catch(e){
                    }
                  }
                } className="text-link small"
                style={{border:'none',background:'none'}}
                >
                <i className="feather-map-pin" />Check-in</button>
              </form>
              <label style={{color:'#000',margin:'auto'}}>
                <i className="feather-image"></i>
                  Adicionar Imagem
                <input style={{display:'none'}} type="file" onChange={event => {
                      setAvatar(event.target.files[0])}
                  }/>
              </label>
            </div>
            <h2 style={{margin:'inherit',textAlign:'center'}}>Vamos ao pagamento</h2>
            <div className="left">
              <Card
                number={card.number}
                name={card.holder_name}
                expiry={card.expiration_date}
                cvc={card.cvv}
                focused="number"
               />
            </div>
          <form onSubmit={handleSubmit} style={{textAlign:'center'}} className="payment-details">
            <Scope path="card">
              <Input
                name="card_holder_name"
                label="Nome no cartão"
                style={{marginTop:'5%',width:'100%',textAlign:'center',border:'none',marginBottom:'3%'}}
                onChange={handleChangeCard}
              />
              <Input
                name="card_number"
                label="Número do cartão"
                style={{marginTop:'5%',width:'100%',textAlign:'center',border:'none',marginBottom:'3%'}}
                onChange={handleChangeCard}
              />
              <div className="group">
                <div>
                  <Input
                    name="card_expiration_date"
                    label="Data de expiração"
                    style={{marginTop:'5%',width:'100%',textAlign:'center',border:'none',marginBottom:'3%'}}
                    onChange={handleChangeCard}
                  />
                </div>
                <div>
                  <Input
                    name="card_cvv"
                    label="Código de segurança"
                    style={{marginTop:'5%',width:'100%',textAlign:'center',border:'none',marginBottom:'3%'}}
                    onChange={handleChangeCard}
                  />
                </div>
              </div>
              <div className="save-card" style={{marginTop:'5%'}}>
              <input
                  type="checkbox"
                  name="save_card"
                  id="save-card"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                />
                <label htmlFor="save-card">
                  Salvar cartão de crédito para a próxima compra
                </label>
              </div>
            </Scope>
            <button style={{border:'#00b3ec',background:'#00b3ec',marginBottom:'5%',marginTop:'5%',borderRadius:'5%',height:'43px',color:'#fff'}} className="buttoncheckout">{loading ? 'Carregando' : 'Pagar R$50,00'}</button>
          </form>      
          </form>  
        </main>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

</>
  );
}


export default Feed;

