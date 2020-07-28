/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect,useState} from 'react';
import api from '../../services/api';
import Header from '../../components/Header Courses';
import {useParams} from 'react-router'
import moment from 'moment'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm Courses';

function CoursesSingle() {

    const [courses,setCourses] = useState([])
    const [buyed, setBuyed] = useState(false)
    const {id} = useParams()
    const promise = loadStripe("pk_live_51H7wkvGHhRYZj7pYIQuXMJJCurr3ygoPHrFnv41YMlxT6JNEuCgicn6XdGvegpocnNnlqGjY3756jNlTLoOPhVSr00QdkjqMGM");

    useEffect(() => {
        async function Courses() {
            try {
                const response = await api.get(`/courses/${id}`)

                console.log(response.data)
                setCourses([response.data])

            } catch (error) {
                console.log(error)
            }
        }
        Courses()
    },[])
    useEffect(() => {
        async function Buyed() {
            try {
                const response = await api.get(`/courses/buyed/${id}`)

                setBuyed(response.data)

            } catch (error) {
                console.log(error)
            }
        }
    Buyed()
    },[])

    return (
        <div>
            <Header></Header>
            <div className="py-5">
                <div className="container">
                <div className="row">
                    <div style={{margin:'auto'}} className="col-lg-8 col-md-8">
                {courses.map(curso => (
                    <div className="blog-card padding-card box shadow-sm rounded bg-white mb-3 border-0">
                        <img className="card-img-top" src="https://www.iq.com.br/wp-content/uploads/2018/08/shutterstock_749455387.jpg" alt="Card image cap" />
                        <div className="card-body">
                        <span className="badge badge-success" style={{fontSize:'15px'}}>R${curso.Text.Value},00</span>
                        <h2>{curso.Text.Title}</h2>
                        <h6 className="mb-3"><i className="feather-calendar" />{moment(curso.createdAt).fromNow()}</h6>
                        <h6>Descrição do Curso</h6>
                        <p>{curso.Text.Description}</p>
                        <h6>Como você recebe o curso</h6>
                        <p>Para proteger o direito intelectual do Dono do curso o link dos videos sera enviado para seu email</p>
                        </div>
                        {buyed
                        ? <h6 style={{textAlign:'center'}}>Curso comprado verifique seu email 🙃</h6>
                        :<div className="card-footer border-0">
                            <h5 style={{textAlign:'center'}}>Compre esse curso agora 🙃</h5>
                            <Elements stripe={promise}>
                                <CheckoutForm course_id={curso._id} price={curso.Text.Value} />
                            </Elements>
                        </div>
                        }
                    </div>
                ))}
                    </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap core JavaScript */}
            {/* slick Slider JS*/}
            {/* Custom scripts for all pages*/}
        </div>
    );
};

export default CoursesSingle;