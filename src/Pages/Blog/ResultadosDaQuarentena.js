/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function ResultadosQuarentena() {
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
                    <p className="mb-2 text-white-50">Postado dia 09/07/2020
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                <div className="row">
                    <div style={{margin:'auto'}} className="col-lg-8 col-md-8">
                    <div className="blog-card padding-card box shadow-sm rounded bg-white mb-3 border-0">
                        <img className="card-img-top" src="https://www.jornalcontabil.com.br/wp-content/uploads/2020/03/desemprego.jpg" alt="Card image cap" />
                        <div className="card-body">
                        <span className="badge badge-success">Guilherme Neto</span>
                        <h2>O desemprego gerado pela Pandemia</h2>
                        <h6 className="mb-3"><i className="feather-calendar" />Julho 06 de 2020 </h6>
                        <p>A pandemia do coronavírus fez com que cerca de 1 milhão de brasileiros perdessem o emprego ao longo de maio. É o que aponta o levantamento inédito divulgado nesta terça-feira (16) pelo Instituto Brasileiro de Geografia e Estatística (IBGE).
                            Ao todo, 10,9 milhões de pessoas estavam desempregadas na última semana de maio, o que deixou a taxa de desemprego em 11,4%. Na primeira semana, este número era de 9,8 milhões e a taxa de desemprego de 10,5%.
                            O IBGE destacou que 17,7 milhões de brasileiros que não estavam empregados na última semana de maio deixaram de procurar emprego por causa da pandemia. Somando este contingente ao de desempregados, chegou a 28,6 milhões o total de pessoas que enfrentaram algum tipo de restrição para ingressar no mercado de trabalho brasileiro em maio "seja por falta de vagas ou receio de contrair o novo coronavírus", conforme destacou o IBGE.
                            O Empregue.me será uma ferramenta INDISPENSÁVEL para aqueles que foram demitidos e estão desesperados em busca de um novo emprego.
                        </p>
                        <h6>Rumo ao amanhã</h6>
                        </div>
                        <div className="card-footer border-0">
                        <div className="footer-social"><span>Compartilhe com seus amigos</span> &nbsp;
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

export default ResultadosQuarentena;