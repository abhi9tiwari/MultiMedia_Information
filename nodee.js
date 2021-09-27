const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <!-- Bootstrap CSS -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Palette+Mosaic&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <title>All about anime.</title>
    </head>
  
    <body>
      <header class="navbar-light navbar-sticky  header-static">
        <div class="navbar-top d-none d-lg-block small bg-dark">
          <div class="container">
            <div class="d-md-flex justify-content-between align-items-center my-2 bg-dark">
              <!-- Top bar left -->
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link ps-0" href="about-us.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Forum</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.getbootstrap.com/store/webestica/">Buy now!</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="signin.html">Login / Join</a>
                </li>
              </ul>
              <!-- Top bar right -->
              <div class="d-flex align-items-center">
                <!-- Dark mode switch -->
                <div class="modeswitch" id="darkModeSwitch">
                  <div class="switch"></div>
                </div>
      
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#"><i class="fab fa-facebook-square"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#"><i class="fab fa-twitter-square"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#"><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link px-2 fs-5" href="#"><i class="fab fa-youtube-square"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ps-2 pe-0 fs-5" href="#"><i class="fab fa-vimeo"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Divider -->
            <div class="border-bottom border-2 border-primary opacity-1"></div>
          </div>
        </div>
      
        <!-- Logo Nav START -->
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <!-- Logo START -->
            <a class="navbar-brand" href="index.html">
             <div class="headingg"><h2>Ani-Info</h2></div>			
            </a>
            <!-- Logo END -->
      
            <!-- Responsive navbar toggler -->
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="text-body h6 d-none d-sm-inline-block">Menu</span>
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <!-- Main navbar START -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav navbar-nav-scroll mx-auto">
      
                <!-- Nav item 1 Demos -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" href="#" id="homeMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                  <ul class="dropdown-menu" aria-labelledby="homeMenu">
                    <li> <a class="dropdown-item active" href="index.html">Home default</a></li>
                    <li> <a class="dropdown-item" href="index-2.html">Magazine classic</a></li>
                    <li> <a class="dropdown-item" href="index-3.html">Magazine</a></li>
                    <li> <a class="dropdown-item" href="index-4.html">Home cards</a></li>
                    <li> <a class="dropdown-item" href="index-5.html">Blog classic</a></li>
                  </ul>
                </li>
      
                <!-- Nav item 2 Pages -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                    <li> <a class="dropdown-item" href="about-us.html">About</a></li>
                    <li> <a class="dropdown-item" href="contact-us.html">Contact</a></li>
                    <!-- Dropdown submenu -->
                    <li class="dropdown-submenu dropend"> 
                      <a class="dropdown-item dropdown-toggle" href="#">Other Archives</a>
                      <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a class="dropdown-item" href="author.html">Author Page</a> </li>
                        <li> <a class="dropdown-item" href="categories.html">Category page 1</a> </li>
                        <li> <a class="dropdown-item" href="categories-2.html">Category page 2</a> </li>
                        <li> <a class="dropdown-item" href="tag.html"># tag</a> </li>
                        <li> <a class="dropdown-item" href="search-result.html">Search result</a> </li>
                      </ul>
                    </li>
                    <li> <a class="dropdown-item" href="404.html">Error 404</a></li>
                    <li> <a class="dropdown-item" href="signin.html">signin</a></li>
                    <li> <a class="dropdown-item" href="signup.html">signup</a></li>
                    <!-- Dropdown submenu levels -->
                    <li class="dropdown-divider"></li>
                    <li class="dropdown-submenu dropend">
                      <a class="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                      <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <!-- dropdown submenu open right -->
                        <li class="dropdown-submenu dropend">
                          <a class="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                          <ul class="dropdown-menu" data-bs-popper="none">
                            <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                        <!-- dropdown submenu open left -->
                        <li class="dropdown-submenu dropstart">
                          <a class="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                          <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                            <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a class="dropdown-item" href="#">Dropdown item</a> </li>
                      </ul>
                    </li>
                    <li class="dropdown-divider"></li>
                    <li> 
                      <a class="dropdown-item" href="https://support.webestica.com/" target="_blank">
                        <i class="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                      </a> 
                    </li>
                    <li> 
                      <a class="dropdown-item" href="docs/index.html" target="_blank">
                        <i class="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                      </a> 
                    </li>
                    <li class="dropdown-divider"></li>
                    <li> 
                      <a class="dropdown-item" href="https://blogzine.webestica.com/rtl" target="_blank">
                        <i class="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                      </a> 
                    </li>
                    <li> 
                      <a class="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                        <i class="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy blogzine!
                      </a> 
                    </li>
                  </ul>
                </li>
      
                <!-- Nav item 3 Post -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="postMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Post</a>
                  <ul class="dropdown-menu" aria-labelledby="postMenu">
                    <!-- dropdown submenu -->
                    <li class="dropdown-submenu dropend"> 
                      <a class="dropdown-item dropdown-toggle" href="#">Post grid</a>
                      <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a class="dropdown-item" href="post-grid.html">Post grid</a> </li>
                        <li> <a class="dropdown-item" href="post-grid-4-col.html">Post grid 4 col</a> </li>
                        <li> <a class="dropdown-item" href="post-grid-masonry.html">Post grid masonry</a> </li>
                        <li> <a class="dropdown-item" href="post-grid-masonry-filter.html">Post grid masonry filter</a> </li>
                        <li> <a class="dropdown-item" href="post-large-and-grid.html">Post mixed large than grid</a> </li>
                      </ul>
                    </li>
                    <li> <a class="dropdown-item" href="post-list.html">Post list</a> </li>
                    <li> <a class="dropdown-item" href="post-list-2.html">Post list 2</a> </li>
                    <li> <a class="dropdown-item" href="post-cards.html">Post card</a> </li>
                    <li> <a class="dropdown-item" href="post-overlay.html">Post overlay</a> </li>
                    <li class="dropdown-divider"></li>
                    <li> <a class="dropdown-item" href="post-single.html">Post single magazine</a> </li>
                    <li> <a class="dropdown-item" href="post-single-2.html">Post single classic</a> </li>
                    <li> <a class="dropdown-item" href="post-single-3.html">Post single minimal</a> </li>
                    <li> <a class="dropdown-item" href="post-single-4.html">Post single card</a> </li>
                    <li> <a class="dropdown-item" href="post-single-5.html">Post single review</a> </li>
                    <li> <a class="dropdown-item" href="post-single-6.html">Post single video</a> </li>
                    <li class="dropdown-divider"></li>
                    <li> <a class="dropdown-item" href="pagination-styles.html">Pagination styles</a> </li>
                  </ul>
                </li>
      
                <!-- Nav item 4 Mega menu -->
                <li class="nav-item dropdown dropdown-fullwidth">
                  <a class="nav-link dropdown-toggle" href="#" id="megaMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Lifestyle</a>
                  <div class="dropdown-menu" aria-labelledby="megaMenu">
                    <div class="container">
                      <div class="row g-4 p-3 flex-fill">
                        <!-- Card item START -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <!-- Card img -->
                            <img class="card-img rounded" src="assets/images/blog/16by9/small/01.jpg" alt="Card image">
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0"><a href="#" class="btn-link text-reset fw-bold">7 common mistakes everyone makes while traveling</a></h6>
                              <!-- Card info -->
                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">Joan Wallace</a>
                                </li>
                                <li class="nav-item">Feb 18, 2021</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- Card item END -->
                        <!-- Card item START -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <!-- Card img -->
                            <img class="card-img rounded" src="assets/images/blog/16by9/small/02.jpg" alt="Card image">
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0"><a href="#" class="btn-link text-reset fw-bold">12 worst types of business accounts you follow on Twitter</a></h6>
                              <!-- Card info -->
                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">Lori Stevens</a>
                                </li>
                                <li class="nav-item">Jun 03, 2021</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- Card item END -->
                        <!-- Card item START -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="card bg-transparent">
                            <!-- Card img -->
                            <img class="card-img rounded" src="assets/images/blog/16by9/small/03.jpg" alt="Card image">
                            <div class="card-body px-0 pt-3">
                              <h6 class="card-title mb-0"><a href="#" class="btn-link text-reset fw-bold">Skills that you can learn from business</a></h6>
                              <!-- Card info -->
                              <ul class="nav nav-divider align-items-center text-uppercase small mt-2">
                                <li class="nav-item">
                                  <a href="#" class="text-reset btn-link">Judy Nguyen</a>
                                </li>
                                <li class="nav-item">Sep 07, 2021</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <!-- Card item END -->
                        <!-- Card item START -->
                        <div class="col-sm-6 col-lg-3">
                          <div class="bg-primary-soft p-4 text-center h-100 w-100 rounded">
                            <span>The Blogzine</span>
                            <h3>Premium Membership</h3>
                            <p>Become a Member Today!</p>
                            <a href="#" class="btn btn-warning">View pricing plans</a>
                          </div>
                        </div>
                        <!-- Card item END -->
                      </div> <!-- Row END -->
                      <!-- Trending tags -->
                      <div class="row px-3">
                        <div class="col-12">
                          <ul class="list-inline mt-3">
                            <li class="list-inline-item">Trending tags:</li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-primary-soft">Travel</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-warning-soft">Business</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-success-soft">Tech</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-danger-soft">Gadgets</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-info-soft">Lifestyle</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-primary-soft">Vaccine</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-success-soft">Sports</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-danger-soft">Covid-19</a></li>
                            <li class="list-inline-item"><a href="#" class="btn btn-sm btn-info-soft">Politics</a></li>
                          </ul>
                        </div>
                      </div> <!-- Row END -->
                    </div>
                  </div>
                </li>
      
                <!-- Nav item 5 link-->
                <li class="nav-item">	<a class="nav-link" href="../docs/alerts.html">Components</a></li>
              </ul>
            </div>
            <!-- Main navbar END -->
      
            <!-- Nav right START -->
            <div class="nav flex-nowrap align-items-center">
              <!-- Nav Button -->
              <div class="nav-item d-none d-md-block">
                <a href="#" class="btn btn-sm btn-danger mb-0 mx-2">Subscribe!</a>
              </div>
              <!-- Nav Search -->
              <div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
                <a class="nav-link dropdown-toggle" role="button" href="#" id="navSearch" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-search fs-4"> </i>
                </a>
                <div class="dropdown-menu dropdown-menu-end shadow rounded p-2" aria-labelledby="navSearch">
                  <form class="input-group">
                    <input class="form-control border-success" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success m-0" type="submit">Search</button>
                  </form>
                </div>
              </div>
              <!-- Offcanvas menu toggler -->
              <div class="nav-item">
                <a class="nav-link p-0" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu">
                  <i class="bi bi-text-right rtl-flip fs-2" data-bs-target="#offcanvasMenu"> </i>
                </a>
              </div>
            </div>
            <!-- Nav right END -->
          </div>
        </nav>
        <!-- Logo Nav END -->
      </header>
  
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./c images/warrior f.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to Ani-Info</h5>
              <p>An immersive anime experience.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./c images/tanjiro f.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Demon Slyer</h5>
              <p>Breath taking animations with amazing storyline.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./c images/movie f.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ghibli Movies</h5>
              <p>As beautiful as it gets.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
      <div class="container my-4">
        <div class="row mb-2">
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static temp">
                <strong class="d-inline-block mb-2 text-primary"
                  >Hajime Isayama</strong
                >
                <h3 class="mb-0">Attack on titan</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="c tempard-text mb-auto">
                  Genres : Action, Military, Mystery, Super Power, Drama, Fantasy,
                  Shounen.
                </p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="./c images/aot t.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static temp">
                <strong class="d-inline-block mb-2 text-success">
                  Hirohiko Araki</strong
                >
                <h3 class="mb-0">Jojos Bizzare Adventure</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">Genres: Action, Adventure, Shounen.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="./c images/jjba t.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container my-4">
        <div class="row mb-2">
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static temp">
                <strong class="d-inline-block mb-2 text-primary"
                  >Makoto Yukimura</strong
                >
                <h3 class="mb-0">Vinland Saga</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  Genres: Action, Adventure, Historical, Drama, Seinen.
                </p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="./c images/vs t.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="
                row
                g-0
                border
                rounded
                overflow-hidden
                flex-md-row
                mb-4
                shadow-sm
                h-md-250
                position-relative
              "
            >
              <div class="col p-4 d-flex flex-column position-static temp">
                <strong class="d-inline-block mb-2 text-success">
                  Akiyuki Nosaka</strong
                >
                <h3 class="mb-0">Grave of the fireflies</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">Genres: Drama, Historical.</p>
                <a href="#" class="stretched-link">Continue reading</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                  src="./c images/gotf t.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container">
        <h1>STUDIO</h1>
        <hr />
        <br>
      </div>
  
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/E44tyzTWYAU-Vx_.jpg"
              alt=""
            />
  
            <h2>MAPPA</h2>
            <p>
              MAPPA Co., Ltd. (Japanese: 株式会社MAPPA, Hepburn: Kabushiki-gaisha
              Mappa) is a Japanese animation studio. It was founded on June 14,
              2011, by Masao Maruyama, a founder and former producer of
              Madhouse,[2] and has produced anime works including Kids on the
              Slope, Terror in Resonance, Yuri!!! on Ice, In This Corner of the
              World, Kakegurui, Banana Fish, Jujutsu Kaisen and the final season
              of Attack on Titan.
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/ufo.jpg"
              alt=""
            />
  
            <h2>UFO TABLE</h2>
            <p>
              Ufotable, Inc. (Japanese: ユーフォーテーブル有限会社, Hepburn:
              Yūfōtēburu yūgen-gaisha) is a Japanese animation studio founded in
              October 2000 by former staff of the TMS Entertainment subsidiary
              Telecom Animation Film and located in Suginami, Tokyo. A unique
              hallmark seen in many of their works (Ninja Nonsense, Futakoi
              Alternative, Coyote Ragtime Show, Gakuen Utopia Manabi Straight!,
              Tales of Symphonia.
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/sg.png"
              alt=""
            />
  
            <h2>STUDIO GHIBLI</h2>
            <p>
              Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn:
              Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio
              headquartered in Koganei, Tokyo.[1] The studio is best known for its
              animated feature films, and has also produced several short
              subjects, television commercials, and one television film. The
              studio's mascot and most recognizable symbol is a character named
              Totoro..
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
      </div>
  
      <br>
  
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/bones.jpg"
              alt=""
            />
  
            <h2>BONES</h2>
            <p>
              Bones Inc. (stylized in lowercase as bones inc.) (Japanese: 株式会社 ボンズ, Hepburn: Kabushiki gaisha Bonzu) is a Japanese animation studio. It has produced numerous series, including RahXephon, No. 6, Wolf's Rain, Scrapped Princess, Eureka Seven, Angelic Layer, Darker than Black, Soul Eater, Ouran High School Host Club, two adaptations of the Fullmetal Alchemist manga, Star Driver, Gosick, Mob Psycho 100, Space Dandy, Sk8 the Infinity, Noragami, and My Hero Academia. Its headquarters are located in Igusa, Suginami, Tokyo.[2] .
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/kyoani.jpg"
              alt=""
            />
  
            <h2>KYOTO ANIMATIONS</h2>
            <p>
              Kyoto Animation Co., Ltd. (Japanese: 株式会社京都アニメーション, Hepburn: Kabushiki-gaisha Kyōto Animēshon), often abbreviated KyoAni (京アニ, Kyōani), is a Japanese animation studio and light novel publisher located in Uji, Kyoto Prefecture. Founded in 1981 by Yoko and Hideaki Hatta, it has produced anime works including The Melancholy of Haruhi Suzumiya (2006), Clannad (2007), K-On! (2009), Free! (2013), Sound! Euphonium (2015), A Silent Voice (2016), and Violet Evergarden (2018). 
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              src="./s imges/wit.png"
              alt=""
            />
  
            <h2>WIT STUDIO</h2>
            <p>
              WIT STUDIO, Inc. (Japanese: 株式会社ウィットスタジオ, Hepburn: Kabushiki-gaisha Witto Sutajio) is a Japanese animation studio founded on June 1, 2012 by producers at Production I.G as a subsidiary of IG Port. It is headquartered in Musashino, Tokyo with Production I.G producer George Wada as president and Tetsuya Nakatake, also a producer at Production I.G., as a director of the studio. The studio gained notability for producing the first three seasons of Attack on Titan.[1] 
            </p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          <!-- /.col-lg-4 -->
        </div>
      </div>
  
      <div class="container">
        <hr />
      </div>
  
  
  
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
      
            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
      
            <div class="col-2">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>
      
            <div class="col-4 offset-1">
              <form>
                <h5>Subscribe to our Website</h5>
                <p>For new monthly information on new releasing and existing anime.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2021 Ani-Info, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
      <!-- 
    <div class="container">
      <div class="row featurette d-flex justify-content-center align-items-center">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div class="col-md-5">
          <svg class="
                bd-placeholder-img bd-placeholder-img-lg
                featurette-image
                img-fluid
                mx-auto
              " width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>
    </div> -->
  
      <!-- Optional JavaScript; choose one of the two! -->
  
      <!-- Option 1: Bootstrap Bundle with Popper -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
  
      <!-- Option 2: Separate Popper and Bootstrap JS -->
      <!--
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
      -->
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
