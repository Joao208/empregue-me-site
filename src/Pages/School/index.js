/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header Bussines';

function Courses(){

    const [courses,setCourses] = useState([])

    useEffect(() => {
        async function Courses() {
            try {
                const response = await api.get('/courses')
                setCourses(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        Courses()
    })


    return (
        <div>
<div>
  <Header></Header>
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <a href="https://light-empregue-me.herokuapp.com/dicas-de-entrevistas"><img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/02/10/02/36/interview-4835116_960_720.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <span className="badge badge-success">R$90,00</span>
                    <h6 className="text-dark">Dicas de como ser um bom funcionario</h6>
                    <p className="mb-0">Nesse curso estou ensinando como você pode ser melhor no que faz</p>
                  </div>
                  <div className="card-footer border-0">
                    <p className="mb-0"><strong>Carlos de Andrades</strong> a 10 days ago </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

        </div>
    );
};

export default Courses;