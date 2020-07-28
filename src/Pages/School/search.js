/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header Courses';
import moment from 'moment'
import {useParams} from 'react-router'

function Courses(){

    const [courses,setCourses] = useState([])
    const {name} = useParams()

    useEffect(() => {
        async function Courses() {
            try {
                const response = await api.get(`/searchcourses/${name}`)
                setCourses(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        Courses()
    },[])

    return (
        <div>
<div>
  <Header></Header>
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            {courses.map(curso => (
            <div className="col-lg-4 col-md-4">
              <div className="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <a href={`/courses/${curso._id}`}><img className="card-img-top" src="https://www.iq.com.br/wp-content/uploads/2018/08/shutterstock_749455387.jpg"></img>
                  <div className="card-body">
                    <span className="badge badge-success">R${curso.Text.Value},00</span>
                    <h6 className="text-dark">{curso.Text.Title}</h6>
                    <p className="mb-0">{curso.Text.Description}</p>
                  </div>
                  <div className="card-footer border-0">
                    <p className="mb-0"><strong>Empregue.me</strong> {moment(curso.createdAt).fromNow()}</p>
                  </div>
                </a>
              </div>
            </div>
            ))}
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