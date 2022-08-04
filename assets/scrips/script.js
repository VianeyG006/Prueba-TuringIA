
((d) => {
    const $btnDesp = d.querySelector(".dropdown-btn"),
      $DM = d.querySelector(".dropdown-menu ");
    $services = d.querySelector(".dropdown ");
  
         d.addEventListener("mouseup", (e) => {    
    if (!$DM.contains(e.target)) {
      if (  !$DM.classList.contains("none")) {
                $DM.classList.add("none");
      }
      if ($btnDesp !=null)
            $btnDesp.addEventListener("click", (e) => {
      $DM.classList.toggle("none");
    });
      }  
    });
  })(document);

  


   