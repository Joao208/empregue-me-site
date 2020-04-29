import React,{useState,Component} from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p13 from '../img/p13.png'

import { uniqueId } from "lodash";
import filesize from "filesize";

import api from '../services/api'
import FileList from "../components/Filelist";
import Upload from "../components/Upload";

class App extends Component {

  state = {
    uploadedFiles: []
  };

  async componentDidMount() {
    const response = await api.get("posts");

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("profile", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`profile/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render(){
  const { uploadedFiles } = this.state;

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [FacebookUrl, setFacebookUrl] = useState('')
  const [InstagramUrl, setInstagramUrl] = useState('')
  const [TwitterUrl, setTwitterUrl] = useState('')
  const [YouTubeUrl, setYouTubeUrl] = useState('')
  const [GithubUrl, setGithubUrl] = useState('')
  const [about, setAbout] = useState('')


  async function SignIn(event) {
    event.preventDefault();
      const response = await api.post('/auth/authenticate', {
        email,
        password
      });
      console.log(response)
      const {
        user,
        token
      } = response.data;

      localStorage.setItem('token', token);
      history.push('/')
  }

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Profile</title>
  {/* Slick Slider */}
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
  {/* Feather Icon*/}
  <link href="vendor/icons/feather.css" rel="stylesheet" type="text/css" />
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Navigation */}
  <nav className="navbar navbar-expand navbar-light bg-white border-bottom osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <aside className="col-md-4">
          <div className="mb-3 border rounded bg-white profile-box text-center w-10">
            <div className="p-4 d-flex align-items-center">
              <img src={img_p13} className="img-fluid rounded-circle"  alt="Responsive image" />
              <div className="p-4">
                <label data-toggle="tooltip" data-placement="top" data-original-title="Upload New Picture" className="btn btn-info m-0" htmlFor="fileAttachmentBtn">
                  <i className="feather-image" />
                  <Upload id="fileAttachmentBtn" onUpload={this.handleUpload} name="file-attachment" type="file" className="d-none" />
                  {!!uploadedFiles.length && (
                  <FileList files={uploadedFiles} onDelete={this.handleDelete} />
                  )}
                  </label>
                <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" type="submit" className="btn btn-danger"><i className="feather-trash-2" /></button>
              </div>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Sobre</h6>
              <p className="mb-0 mt-0 small">Fale sobre você na bio.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="form-group mb-4">
                  <label className="mb-1">BIO</label>
                  <div className="position-relative">
                    <textarea className="form-control" rows={4} name="text" placeholder="Começar Biografia" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor :)"} />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="mb-1 w-100">Habilidades</label>
                  <div className="custom-control custom-checkbox d-inline mr-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">JavaScript, jQuery</label>
                  </div>
                  <div className="custom-control custom-checkbox d-inline">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">HTML5, CSS3</label>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden text-center p-3">
                <a className="font-weight-bold btn btn-light rounded p-3 d-block" href="#"> Salvar </a>
              </div>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Redes sociais</h6>
              <p className="mb-0 mt-0 small">Adicione outros links ao seu perfil.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-instagram position-absolute text-warning" />
                  <input placeholder="Add Instagram link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <input placeholder="Add Facebook link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <input placeholder="Add Twitter link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <input placeholder="Add Youtube link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <input placeholder="Add Github link" type="text" className="form-control" />
                </div>
              </div>
              <div className="overflow-hidden text-center p-3">
                <a className="font-weight-bold btn btn-light rounded p-3 d-block" href="#"> Atualizar perfis sociais </a>
              </div>
            </div>
          </div>
        </aside>
        <main className="col-md-8">
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Informações Basicas</h6>
              <p className="mb-0 mt-0 small">Lorem ipsum dolor sit amet, consecteturs.
              </p>
            </div>
            <div className="box-body p-3">
              <form className="js-validate" noValidate="novalidate">
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="nameLabel" className="form-label">
                        Nome
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" defaultValue="Gurdeep Osahan" placeholder="Enter your name" aria-label="Enter your name" required aria-describedby="nameLabel" data-msg="Please enter your name." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Exibido aos outros usúarios.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="emailLabel" className="form-label">
                        Email
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" defaultValue="augustoj311@gmail.com" placeholder="Enter your email address" aria-label="Enter your email address" required aria-describedby="emailLabel" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Nunca compartilhe seu email com ninguém.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
              </form>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Curriculums
              </h6>             
            </div>
            <div className="box-body px-3 pt-3 pb-0">
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label id="FROM" className="form-label">De</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="From" aria-label="FROM" aria-describedby="FROM" />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-sm-6 mb-4">
                  <label id="TO" className="form-label">Até</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="TO" aria-label="TO" aria-describedby="TO" />
                  </div>
                  {/* End Input */}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label id="companyLabel" className="form-label">Empresa</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your company title" aria-label="Enter your company title" aria-describedby="companyLabel" />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-sm-6 mb-4">
                  <label id="positionLabel" className="form-label">Cargo</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your position" aria-label="Enter your position" aria-describedby="positionLabel" />
                  </div>
                  {/* End Input */}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 text-right">
            <a className="font-weight-bold btn btn-link rounded p-3" href="/profile"> &nbsp;&nbsp;&nbsp;&nbsp; Cancelar &nbsp;&nbsp;&nbsp;&nbsp; </a>
            <a className="font-weight-bold btn btn-primary rounded p-3" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;  Salvar Mudanças &nbsp;&nbsp;&nbsp;&nbsp; </a>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>
{/* Bootstrap core JavaScript */}
</>
  );
}
}

export default App;
