import { Link } from "react-router-dom"
import Header from "../components/Header";

function Baby() {
  const babies =[
    {
      id: 1,
      tag : 'New Prints',
      name: "Honest Diapers",
      price: "$12.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw23f841e3/images/large/Honest-Diaper/ECF_Classic_2023/polybags/PatternPlay_Polybag1.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw3b39927f/images/large/Honest-Diaper/ECF_Classic_2023/lifestyle/RoseBlossom_Lifestyle.jpg?sw=400&sh=400&sm=fit',
      image2: './images/image1.png',
      comment:'43 prints'
    },

    {
      id: 2,
      tag : 'Best Seller',
      name: "Diaper Cakes",
      price: "$44.99 - $99.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwdc65ed83/images/large/Diaper-Cake/DiaperCakes22Update/MiniDiaperCake_All_0009_DTC.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw5e311b04/images/large/Diaper-Cake/DiaperCakes22Update/StandardComponentsCanvas.jpg?sw=400&sh=400&sm=fit',
      image2: 'images/image2.png',
      comment:'6 prints'
    },

    {
      id: 3,
      tag : '',
      name: "Overnight Diapers",
      price: "$13.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw635a206b/images/large/Overnights/polybagsOnWhite/3S_sleepysheep_small_front.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0485c37f/images/large/Overnights/elle.rue.jpg?sw=400&sh=400&sm=fit',
        image2: './.images/image3',
      comment: '2 prints' 
    },

    {
      id: 4,
      tag : '',
      name: "Training Pants",
      price: "$12.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw754e7c8f/images/large/Training-Pants/Polybags/2022/TrainingPantsBag_RompinStompin_2t-3t_front.jpg?sw=400&sh=400&sm=fit",
        image1 : 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw1391bc92/images/large/Training-Pants/2022-New-Prints-model/ROMPIN_STOMPIN_armsup.jpg?sw=400&sh=400&sm=fit',
        image2: '',
        comment:'4 scents'
    },

    {
      id: 5,
      tag: 'BEST VALUE',
      name: "Dipaers + Wipes Subscription",
      price: "$̶1̶1̶1̶.̶5̶9̶  $89.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw1a2a5bb8/images/large/Diapers-and-Wipes-Bundle/DW_Bundle_Marketing_Tile_2023.gif?sw=400&sh=400&sm=fit",
        image1 : '',
        image2:'',
        comment:''
    },
    {
      id: 6,
      tag: '',
      name: "Diaper Box",
      price: "$̶6̶4̶.̶9̶5̶ $59.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw3a16d248/images/large/Honest-Diaper/ECF_Classic_2023/Diaper%20Box/Polybags/AboveItAllByardBabies_PDP.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw81d7bca6/images/large/Honest-Diaper/tesla-transition/tesla-lifestyle/barnyard2.jpg?sw=400&sh=400&sm=fit',
        image2: '',
        comment:'29 prints'
    },
    {
      id: 7,
      tag: '',
      name: "Overnight Diaper Box",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw153aed8b/images/large/Overnight-diaper-club-boxes/Overnights_Bilingual_ClubBox_Sleepy_Sheep_Size_6_1.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw537bc6bb/images/large/Campaign-PDP-Images/Sleep-Campaign-2023/H01TCB00S4S5R_Overnights_44ctSz5_StarryNights_Secondary.jpg?sw=400&sh=400&sm=fit',
        image2: '',
        comment:'2 prints'
    },
    {
      id: 8,
      tag: '',
      name: "Training Pants Bundle",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwfa9ab3cd/images/large/TrainingPantsBundle/restage-wipes-downcount-2023/Training_Pants_Bundle_white.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw61661878/images/large/TrainingPantsBundle/restage-wipes-downcount-2023/Faceout_notext_canvas.jpg?sw=400&sh=400&sm=fit',
        image2: '',
        comment:''
    },
  ];
  return (
    <div>
      <Header/>
      <h1>ALL BABY CARE PRODUCTS</h1>
      <div className="grid">
      <ul>
        {babies.map((bubu) => (
          <Link>
          <li key={bubu.id}>
            <p className="babyTag">{bubu.tag}</p>
            <div className="imageContainer">
              {bubu.image && (
                <img className="babyImage" src={bubu.image} alt={bubu.name} />
              )}
              {bubu.image1 && (
                <img className="babyImage hoverImage" src={bubu.image1} alt={bubu.name} />
              )}
            </div>
            <p>{bubu.name}</p>
            <p className="babyPrice">Price: {bubu.price}</p>
            {bubu.image2 && <img src='../src/components/images/image2' />}
            <p className="babyComment">{bubu.comment}</p>
          </li>
          </Link>
        ))}
      </ul>
      </div>
    </div>
  )
}
export default Baby