/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function blog(){
    return (
        <div>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me - Blog</title>
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
  <div className="py-5 bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mx-auto">
          <h1 className="text-white font-weight-light"><span className="font-weight-bold">Empregue.me</span> Blog</h1>
          <p className="mb-2 text-white-50">Ultima motificação 02/07/2020
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <a href="https://light-empregue-me.herokuapp.com/dicas-de-entrevistas"><img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/02/10/02/36/interview-4835116_960_720.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <span className="badge badge-success">Erik Gotti</span>
                    <h6 className="text-dark">Dicas de como sair bem em uma entrevista</h6>
                    <p className="mb-0">Entre e veja quais são as principais dicas de como se sair bem em uma entrevista de emprego criado por Erik Gotti</p>
                  </div>
                  <div className="card-footer border-0">
                    <p className="mb-0"><strong>Erick Gotti</strong> Julho 02 de 2020</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="box shadow-sm rounded bg-white mb-3 blog-card border-0">
                <a href="https://light-empregue-me.herokuapp.com/dicas-de-entrevistas"><img className="card-img-top" src="blob:https://web.whatsapp.com/c3d8ee25-9849-4b37-b85a-7d774fc601fc" alt="Card image cap" />
                  <div className="card-body">
                    <span className="badge badge-success">Guilherme Neto</span>
                    <h6 className="text-dark">O desemprego gerado pela pandemia</h6>
                    <p className="mb-0">Entre e veja quais os principais resultados da pandemia</p>
                  </div>
                  <div className="card-footer border-0">
                    <p className="mb-0"><strong>Guilherme Neto</strong> Julho 09 de 2020</p>
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

export default blog;