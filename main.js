//arrays containing images
var trendingImages = [
  "img/Nike shoes.png", 
  "img/womans black nikes.png",
  "img/kids black nike clothing.png",
  "img/black nikes.png"
         ]
var images = [
    "img/Nike shoes.png ", 
    "img/black nikes.png",
    "img/red nikes.png",
    "img/black nikes 2.png"
           ]
var womans = [
    "img/womans white nikes.png", 
    "img/womans white nikes 2.png",
    "img/womans black nikes.png",
    "img/womans black nikes 2.png"
    ]
var kids = [
    "img/kids black nike clothing.png", 
    "img/kids green nike clothing.png",
    "img/kids red nike clothing.png",
    "img/kids grey clothing.png"
    ]

  //array containing categories
  const categories = ["trendingImages", "images", "womans", "kids"];
  let currentCat = categories[1];
  //indicator dots
  const picSpot1 = document.getElementById("picspot1");
  const picSpot2 = document.getElementById("picspot2");
  const picSpot3 = document.getElementById("picspot3");
  const picSpot4 = document.getElementById("picspot4");
  var picNum = 0;
  //changes the image slider's picture based on the value of currentCat.
  function changeImage()
  {
    if (currentCat == categories[0])
    {
      document.getElementById("images").src = trendingImages[picNum];
    }
    else if (currentCat == categories[1])
    {
      document.getElementById("images").src = images[picNum];
    }
    else if (currentCat == categories[2])
    {
      document.getElementById("images").src = womans[picNum];
    }
    else if (currentCat == categories[3])
    {
      document.getElementById("images").src = kids[picNum];
    }
  }
  changeImage();
  //adds one to picNum, changes the image and resets picNum to 0 when it is greater than 3.
  function picNumber()
  {
    picNum++;
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
    changeImage();
    gsap.to("#images", { duration: 0.2, opacity: 1 });
    }
  });
    console.log(currentCat)
    if (picNum > 3)
    {
      picNum = 0;
      //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    }
    //changes the picspot's colours based on the value of picNum (The four little dots below the image slider).
    if (picNum == 0)
  {
    // $("#picspot1").css("background-color", "black")
    // $("#picspot2").css("background-color", "white")
    // $("#picspot3").css("background-color", "white")
    // $("#picspot4").css("background-color", "white")
    //animates the black indicator dot
    gsap.to("#blackPicSpot", 0.1, {x: -84.7});
  }
  else if (picNum == 1)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -62.4});
  }
  else if (picNum == 2)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -40.5});
  }
  else if (picNum == 3)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -18.5});
  }
  }
  //lowers picNum, changes image of image slider and sets picNum to 3 if less than 0.
  function picNumberMinus()
  {
    picNum--;
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    if (picNum < 0)
    {
      picNum = 3;
      //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    }
    if (picNum == 0)
  {
    // $("#picspot1").css("background-color", "black")
    // $("#picspot2").css("background-color", "white")
    // $("#picspot3").css("background-color", "white")
    // $("#picspot4").css("background-color", "white")
    gsap.to("#blackPicSpot", 0.1, {x: -84.7});
  }
  else if (picNum == 1)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -62.4});
  }
  else if (picNum == 2)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -40.5});
  }
  else if (picNum == 3)
  {
    gsap.to("#blackPicSpot", 0.1, {x: -18.5});
  }
  }
  //turns the first pic button black and the rest white (The four little dots below the image slider). And change image.
  function picLeftBlack()
  {
    picNum = 0;
    // $("#picspot1").css("background-color", "black")
    // $("#picspot2").css("background-color", "white")
    // $("#picspot3").css("background-color", "white")
    // $("#picspot4").css("background-color", "white")
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    gsap.to("#blackPicSpot", 0.5, {x: -84.7});
  }
  //turns the second pic button black
  function picMiddleBlack()
  {
    picNum = 1;
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    gsap.to("#blackPicSpot", 0.5, {x: -62.4});
  }
  //third
  function picRightBlack()
  {
    picNum = 2;
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    gsap.to("#blackPicSpot", 0.5, {x: -40.5});
  }
  //fourth
  function picLastBlack()
  {
    picNum = 3;
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      changeImage();
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    gsap.to("#blackPicSpot", 0.5, {x: -18.5});
  }
  //click on trending divs using jQuery
  $("#trending1").click(function() {
    //change images smoothly
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[0];
      document.getElementById("images").src = trendingImages[0];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    picLeftBlack();
  });
  $("#trending2").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[0];
      document.getElementById("images").src = trendingImages[1];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    picMiddleBlack();
  });
  $("#trending3").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[0];
      document.getElementById("images").src = trendingImages[2];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    picRightBlack();
  });
  $("#trending4").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[0];
      document.getElementById("images").src = trendingImages[3];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    picLastBlack();
  });
  //mens
  $("#mens1").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
    currentCat = categories[1];
    document.getElementById("images").src = images[0];
    gsap.to("#images", { duration: 0.2, opacity: 1 });
      }
    });
    picLeftBlack();
  });
  $("#mens2").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[1];
      document.getElementById("images").src = images[1];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picMiddleBlack();
  });
  $("#mens3").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[1];
      document.getElementById("images").src = images[2];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picRightBlack();
  });
  $("#mens4").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[1];
      document.getElementById("images").src = images[3];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picLastBlack();
  });
  //womans
  $("#womens1").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[2];
      document.getElementById("images").src = womans[0];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picLeftBlack();
  });
  $("#womens2").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[2];
      document.getElementById("images").src = womans[1];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picMiddleBlack();
  });
  $("#womens3").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[2];
      document.getElementById("images").src = womans[2];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picRightBlack();
  });
  $("#womens4").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[2];
      document.getElementById("images").src = womans[3];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picLastBlack();
  });
  //kids
  $("#kids1").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[3];
      document.getElementById("images").src = kids[0];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picLeftBlack();
  });
  $("#kids2").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[3];
      document.getElementById("images").src = kids[1];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picMiddleBlack();
  });
  $("#kids3").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[3];
      document.getElementById("images").src = kids[2];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picRightBlack();
  });
  $("#kids4").click(function() {
    gsap.to("#images", {duration: 0.2,opacity: 0, onComplete: function() {
      currentCat = categories[3];
      document.getElementById("images").src = kids[3];
      gsap.to("#images", { duration: 0.2, opacity: 1 });
        }
      });
    picLastBlack();
  });
  //the four pic buttons.
  $("#picspot1").click(function() {
    picLeftBlack();
  });
  $("#picspot2").click(function() {
    picMiddleBlack();
  });
  $("#picspot3").click(function() {
    picRightBlack();
  });
  $("#picspot4").click(function() {
    picLastBlack();
  });
  
  //make arrow icon bigger when hovering using ease bounce out.
  document.getElementById("left").addEventListener("mouseover", function() {
    //alert("Hello left!");
    gsap.to("#left-icon", 0.4, {scale: 1.3, ease: "bounce.out"});
  });
  //make arrow icon smaller when not hovering
  document.getElementById("left").addEventListener("mouseout", function() {
    //alert("Hello left!");
    gsap.to("#left-icon", 0.1, {scale: 1});
  });
  document.getElementById("right").addEventListener("mouseover", function() {
    //alert("Hello right!");
    gsap.to("#right-icon", 0.4, {scale: 1.3, ease: "bounce.out"});
  });
  document.getElementById("right").addEventListener("mouseout", function() {
    //alert("Hello right!");
    gsap.to("#right-icon", 0.1, {scale: 1});
  });
  //make arrows shrink when pressing down on arrow and bigger on release.
  document.getElementById("right").addEventListener("mousedown", function() {
    //alert("Hello right!");
    gsap.to("#right-icon", 0.1, {scale: 1});
  });
  document.getElementById("right").addEventListener("mouseup", function() {
    //alert("Hello right!");
    gsap.to("#right-icon", 0.1, {scale: 1.3});
  });
  document.getElementById("left").addEventListener("mousedown", function() {
    //alert("Hello left!");
    gsap.to("#left-icon", 0.1, {scale: 1});
  });
  document.getElementById("left").addEventListener("mouseup", function() {
    //alert("Hello left!");
    gsap.to("#left-icon", 0.1, {scale: 1.3});
  });
  


  
