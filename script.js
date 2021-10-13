let heroes = [
    {
        name: "Joseph Chatoyer",
        bio: "Chief Joseph Chatoyer, also known as Joseph Satuye, was a Garifuna chief who led the Garifuna revolt against the British attempts of colonization of Saint Vincent. Killed in the battle against the British in the Second Carib War, Chief Chatoyer is a hero to the Garifuna people. Saint Vincent and the Grenadines declared him a national hero in 2002, making March 14 – the anniversary of his death – a public holiday.",
        
    },
    
    {
        name: "Thomas Vincent",
        bio: "Born on September 17, 1887 in Puerto Cortes, Honduras, Thomas Vincent Ramos not only molded young minds as a school teacher, he also founded the Carib Development and Sick Aid Society (CDS) as well as the Carib International Society (CIS). Both organizations aimed to offer support to the most vulnerable and had a prominent presence in Garifuna communities in Belize, as well as affiliations in Guatemala and Honduras. <hr>After Ramos married, he and his wife moved to Dangriga, Belize in 1920. While there, he fought for improved health facilities and lobbied for native nurses to serve Garinagu in hospitals. <hr>In an effort to preserve and celebrate the Garifuna cultural heritage, Ramos – along with Pantaleon Hernandez and Domingo Ventura – petitioned the British Governor to establish a public and bank holiday in observance of the group’s arrival to Belize on November 19. The day became an official national holiday in 1977."
    },
    
    
    {
        name: "Alejo Beni",
        bio: "On November 19, 1832, Alejo Beni led a group of Garifuna to the southern Belizean coastline following the republican revolt, where they had no option but to flee. Garinagu continued their epic exodus in even greater numbers settling across Belize between the early 1830s and 1900s. Belize is the only country in the world where Garifuna Settlement Day is both a federal and bank holiday. Garifuna Settlement Day in Belize consist of reenactments of the arrival of the Garifuna people by way of a dory (dug-out canoe), and other celebrations."
    },
    
    {
        name: "Miriam Miranda",
        bio: "Miriam Miranda is an activist and the current leader of the OFRANEH. The organization works with Garifuna and indigenous communities in Honduras to protect communities’ economic, social, and cultural rights. The organization also promotes health and environmental education, supports the use of the Garifuna language, and promotes youth and women’s leadership development. Miranda has dedicated her life to the cause, and as a result, has been threatened and kidnapped. In 2015, Miranda succeeded in bringing Canadian investor Randy Jorgensen to trial in Trujillo, Honduras for his mega-tourism project built illegally on Garifuna land. <hr>“We live almost on the sea, right on the beach,” she said. “It’s a blessing but recently it’s also become a curse, because of course all those with power want to have a place on the beach. The displacement of communities and the loss of cultures that come with the development of tourism is growing… but the Garifuna women, many of them elders, have incredible strength. They participate in meetings, in actions, tearing down walls that are built on the beach. They’re sustaining the Garifuna youth so that they know who they are, without shame.”"
    },
    
    
    {
        name: "Jose Ávila",
        bio: "Hailing from Honduras, Jose Ávila is an important figure to Garifuna community in the Bronx, which has a sizable Garinagu population. He moved to the New York borough in 2006 and has actively worked to empower Garifuna people. <hr>Ávila is the founder of the New Horizon Investment Club, an organization that promotes the financial empowerment and economic development of the Garinagu. He organizes cultural gatherings, award ceremonies, and Garifuna Month in the Bronx. He’s the managing Member of Garifuna Afro-Latino Entertainment LLC, where he oversees the global entertainment business, including Garifuna Music Group, Garifuna Music Publishing Group, and Gollywood (Garifuna Cinema), which includes motion picture, television, and digital content production and distribution, and the development of new entertainment products, services, and technologies.<hr>He is also Chairman of the Board of the Garifuna Coalition USA, Inc. In 2009, borough President Rubén Díaz Jr. appointed him to the Bronx Community Board 6 to further serve his neighborhood."
    },

    {
        name: "Joshua Arana",
        bio: "Joshua Arana, better known is Josh is known to be one of the virtuosos of the Garifuna drum. He is known as the lead drummer in the Garifuna Collective Band who travelled with Punta Rock legend, the late Andy Palacio, on his tours across the world."
    },
    
    {
        name: "Andy Palacio",
        bio: "Andy Palacio was a Belizean Punta musician and Garifuna activist. He grew up in the coastal village of Barranco, Belize and “soaked up local and international music.” He was known for his revival of Garifuna music, getting his start in the 1980s with “punta rock,” a funky, fast-tempo style similar to merengue and soca. In 1981 Palacio created a Garifuna program on Radio Belize to help preserve the Garifuna language. His album, Watina, with the Garifuna Collective received accolades and landed on best world music release lists in 2007. In January 2008, Palacio died from respiratory failure after a stroke."
    },
    
    {
        name: "Clayton Williams",
        bio: "Musician, singer-songwriter, percussionist and guitarist Clayton Williams is the new voice of Garifuna Music, as the youngest Parandero. A member of the Millennial Generation, he represents the present and future of Garifuna Music. His goal is to preserve the Garifuna culture's unique language and extraordinary sound, while moving Garifuna Music forward."
    },

]

let bttn = document.querySelectorAll(".moreInfo");
let hero = document.querySelectorAll(".heroContainer");
let searchinput = document.querySelector("input.input");
let submit = document.querySelector(".submit");

// using for loop to loop over each hero and listen for button click to display information about hero

for (let i = 0; i < bttn.length; i++) {
    bttn[i].addEventListener("click", function (e) {
      e.preventDefault();
    //   console.log(heroes[i].name);
      let paragraph = document.createElement("p");
      let bio = document.createTextNode(heroes[i].bio);
      paragraph.appendChild(bio);
      paragraph.innerHTML = heroes[i].bio
      hero[i].appendChild(paragraph);
      
    },
    

    // only listen for button click once
    {once : true}
    );
}

// function to hide display once user clicks button for a second time
function hideDisplay() {
let aboutHero = document.querySelector("p")
if (aboutHero.display === "none") {
      aboutHero.style.display = "block";
      } else {
        aboutHero.style.display = "none";
      }
}


submit.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 0; i < hero.length; i++) {
      let heroName = hero[i].querySelector("h3").textContent;
      if (heroName.toLowerCase().includes(searchinput.value.toLowerCase())) {
        hero[i].style.display = "block";
      } else {
        hero[i].style.display = "none";
      }
    }
  });