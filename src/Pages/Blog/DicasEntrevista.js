/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

  function blog_single() {
    return (
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
                    <h1 className="text-white font-weight-light"><span className="font-weight-bold">Blog  
                        </span> Empregue.me</h1>
                    <p className="mb-2 text-white-50">Postado dia 02/07/2020
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                    <div className="blog-card padding-card box shadow-sm rounded bg-white mb-3 border-0">
                        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/02/10/02/36/interview-4835116_960_720.jpg" alt="Card image cap" />
                        <div className="card-body">
                        <span className="badge badge-success">Erik Gotti</span>
                        <h2>Como se sair bem em uma entrevista de emprego</h2>
                        <h6 className="mb-3"><i className="feather-calendar" />Julho 02 de 2020 </h6>
                        <h6>"Quem sou eu:"</h6>
                        <p>
                        Este é o mais comum em entrevistas de emprego. Aqui você pode apresentar alguns dados sobre sua vida pessoal e dissertar sobre sua trajetória profissional, expondo seus objetivos e metas de carreira para o futuro.                       
                        </p>
                        <h6>"Vida profissional:"</h6>
                        <p>
                        Este tema é proposto para que você apresente sua trajetória no mercado de trabalho. O ideal é estabelecer uma ordem cronológica e destacar os pontos altos na sua área de atuação. Você ainda pode abordar habilidades e experiências relacionadas à vaga pretendida.                        
                        </p>
                        <h6>"A empresa:"</h6>
                        <p>
                        Este tema pode aparecer também com a pergunta sobre o motivo de ter se candidatado à vaga ou porque quer trabalhar na empresa. Ele busca avaliar se o candidato conhece a empresa e está por dentro da vaga. Por isso é importante se preparar previamente e pesquisar bastante sobre a empresa. O ideal é escrever sobre a área de atuação, visão e valores. Também é possível expor dados sobre fatos históricos de sua fundação, produtos e serviços.
                        </p>
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                            <blockquote className="margin-top-1x margin-bottom-1x">
                                <p className="font-weight-bold">
                                O único lugar onde o sucesso vem antes do trabalho é no dicionário.
                                </p>
                                <cite>Desconhecido</cite>
                            </blockquote>
                            </div>
                        </div>
                        </div>
                        <div className="card-footer border-0">
                        <div className="footer-social"><span>Compartilhar</span> : &nbsp;
                        <WhatsappShareButton url={'https://light-empregue-me.herokuapp.com/dicas-de-entrevistas'}/>
                        <FacebookShareButton url={'https://light-empregue-me.herokuapp.com/dicas-de-entrevistas'} />
                        <TwitterShareButton url={'https://light-empregue-me.herokuapp.com/dicas-de-entrevistas'} />
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
    );
};

export default blog_single;