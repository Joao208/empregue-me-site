/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css'

import img_logo_svg from '../img/logo.png'

function Feed() {


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | FAQ</title>
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
  <nav className="navbar navbar-expand navbar-dark bg-primary osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
    </div>
  </nav>
  <div className="bg-primary pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-7 text-center mx-auto my-4">
          {/* Title */}
          <div className="mb-4">
            <h1 className="display-4 text-white mb-0">Como podemos <span className="font-weight-bold">ajudar ?</span></h1>
          </div>
          {/* End Title */}
          {/* Input */}
          <form className="input-group input-group-lg input-group-borderless mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white border-0" id="askQuestions">
                <span className="feather-search" />
              </span>
            </div>
            <input type="search" className="form-control border-0 shadow-none" placeholder="Faça uma pergunta" aria-label="Ask a question" aria-describedby="askQuestions" />
          </form>
          {/* End Input */}
          {/* Text/Links */}
          <p className="text-white">
            Tópicos populares:
            <a className="text-info ml-1"  href="">preço,</a>
            <a className="text-info ml-1"  href="">upgrade,</a>
            <a className="text-info ml-1"  href="">membroa</a>
          </p>
          {/* End Text/Links */}
        </div>
      </div>
    </div>
  </div>
  <div className="py-4">
    <div className="container mx-auto col-md-8">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-6">
          <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
              <i className="feather-message-circle display-4" />
              <div className="ml-4">
                <h5 className="font-weight-normal text-dark mb-3 mt-0">Fórum de ajuda</h5>
                <p className="mb-0 text-muted">Encontre a resposta para qualquer pergunta, desde o básico até dicas e truques avançados! ...
                  ...
                </p>
              </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
              <a className="font-weight-bold d-block"  href=""> Ajuda do Empregue.me Fórum. </a>
              <i className="feather-arrow-right-circle ml-auto text-primary" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
              <i className="feather-lock display-4" />
              <div className="ml-4">
                <h5 className="font-weight-normal text-dark mb-3 mt-0">Centro de segurança
                </h5>
                <p className="mb-0 text-muted">Deseja saber mais sobre a segurança do Empregue.me?
                  ...
                </p>
              </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
              <a className="font-weight-bold d-block"  href=""> Empregue.me centro de segurança. </a>
              <i className="feather-arrow-right-circle ml-auto text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Main Content */}
        <div className="col-md-12">
          <div id="basics">
            {/* Title */}
            <div className="mb-3 mt-0">
              <h4 className="font-weight-semi-bold">Fundamentos</h4>
            </div>
            {/* End Title */}
            {/* Basics Accordion */}
            <div id="basicsAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                      Do you have any built-in caching?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseOne" className="collapse" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion" style={{}}>
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                      Can I add/upgrade my plan at any time?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseTwo" className="collapse" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                      What access comes with my hosting plan?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseThree" className="collapse" aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                      How do I change my password?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseFour" className="collapse" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Basics Accordion */}
          </div>
          <div id="account">
            {/* Title */}
            <div className="mb-3 mt-4">
              <h4 className="font-weight-semi-bold">Conta</h4>
            </div>
            {/* End Title */}
            {/* Account Accordion */}
            <div id="accountAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#accountCollapseOne" aria-expanded="false" aria-controls="accountCollapseOne">
                      How do I change my password?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseOne" className="collapse show" aria-labelledby="accountHeadingOne" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseTwo" aria-expanded="false" aria-controls="accountCollapseTwo">
                      How do I delete my account?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseTwo" className="collapse" aria-labelledby="accountHeadingTwo" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseThree" aria-expanded="false" aria-controls="accountCollapseThree">
                      How do I change my account settings?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseThree" className="collapse" aria-labelledby="accountHeadingThree" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 ">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseFour" aria-expanded="false" aria-controls="accountCollapseFour">
                      I forgot my password. How do I reset it?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseFour" className="collapse" aria-labelledby="accountHeadingFour" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 ">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Account Accordion */}
          </div>
          <div id="privacy">
            {/* Title */}
            <div className="mb-3 mt-4">
              <h4 className="font-weight-semi-bold">Privacidade</h4>
            </div>
            {/* End Title */}
            {/* Privacy Accordion */}
            <div id="privacyAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#privacyCollapseOne" aria-expanded="false" aria-controls="privacyCollapseOne">
                      Can I specify my own private key?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseOne" className="collapse show" aria-labelledby="privacyHeadingOne" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseTwo" aria-expanded="false" aria-controls="privacyCollapseTwo">
                      My files are missing! How do I get them back?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseTwo" className="collapse" aria-labelledby="privacyHeadingTwo" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseThree" aria-expanded="false" aria-controls="privacyCollapseThree">
                      How can I access my privacy data?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseThree" className="collapse" aria-labelledby="privacyHeadingThree" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseFour" aria-expanded="false" aria-controls="privacyCollapseFour">
                      How can I control if other search engines can link to my profile?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseFour" className="collapse" aria-labelledby="privacyHeadingFour" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Privacy Accordion */}
          </div>
        </div>
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
