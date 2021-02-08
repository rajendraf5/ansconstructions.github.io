<?php include("header.php");?>
<section class="page-title" style="background-image:url(images/feedbackbanner.jpg);">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="title-box">
          <h2>Feedback</h2>
            <ul>
              <li><a href="index.php">Home</a></li>
              <li>Feedback</li>
            </ul>
        </div>
      </div><!--./col-lg-12-->      
    </div><!--./row-->        
  </div><!--./container-->
</section> 

<section class="bggray relative">
  <div class="container">
    <div class="row justify-content-sm-center justify-content-md-start">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="consultation">
            <h3>Feedback</h3>
            <div class="contact-form mt-4">
              <form method="post"> 
                  <div class="row form-group">
                    <label class="col-lg-3">Name</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                        <input type="text" class="form-control" name="username" required="">
                      </div>             
                  </div><!--./row-->

                  <div class="row form-group">
                    <label class="col-lg-3">Email</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                        <input type="text" class="form-control" name="username" required="">
                      </div>             
                  </div><!--./row-->

                  <div class="row form-group">
                    <label class="col-lg-3">Mobile</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                        <input type="text" class="form-control" name="username" required="">
                      </div>             
                  </div><!--./row--> 

                  <div class="row form-group">
                    <label class="col-lg-3">Subject</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                        <input type="text" class="form-control" name="username" required="">
                      </div>             
                  </div><!--./row-->

                  <div class="row form-group">
                    <label class="col-lg-3">Message</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                         <textarea class="form-control" id="comment"  required=""></textarea>
                      </div>             
                  </div><!--./row-->

                  <div class="row form-group">
                    <label class="col-lg-3" style="visibility: hidden;">Message</label>
                      <div class="col-lg-9 col-md-12 col-sm-12"> 
                        <button type="submit" class="outlinebtn" name="">Submit</button>
                      </div>             
                  </div><!--./row-->     
                            
              </form>
            </div>
          </div>
        </div><!--./col-lg-12-->
      </div><!--./row-->
     </div><!--./container-->
    <div class="image-layer" style="background-image: url(images/feedback.jpg);"></div>
</section>
<?php include("footer.php");?>