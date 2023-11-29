import { Link } from "react-router-dom"


function Baby() {
  const babies =[
    {
      id: 1,
      tag : 'New Prints',
      name: "Honest Diapers",
      price: "$12.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwb5fd9658/images/large/Dry-Wipes/restage-2023/H0012W48V200S_DryWipes_wipefan.jpg?sw=2000&sh=2000&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=2000&sh=2000&sm=fit',
      image2: './images/image1.png',
      comment:'43 prints'
    },

    {
      id: 2,
      tag : 'Best Seller',
      name: "Clean Concisous™ Wipes",
      price: "$0.99 - $44.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw75a9f367/images/large/Clean-Conscious-Wipes/Balance-Blues/60ct_BalancedBlues_baby_changing_table-min.jpg?sw=2000&sh=2000&sm=fit',
      image2: 'images/image2.png',
      comment:'8 prints'
    },

    {
      id: 3,
      tag : '',
      name: "Overnight Diapers",
      price: "$13.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwb3acd331/images/large/Flushable-Wipes/lifestyle/FlushableWipes_lifestyle4.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw68cc35ad/images/large/Flushable-Wipes/lifestyle/FlushableWipes_lifestyle3.jpg?sw=2000&sh=2000&sm=fit',
        image2: './.images/image3',
      comment: '2 prints' 
    },

    {
      id: 4,
      tag : '',
      name: "Training Pants",
      price: "$12.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwdd61dd03/images/large/Everyday-Pack-of-Wipes/EverydayPackOfWipes_white.jpg?sw=400&sh=400&sm=fit",
        image1 : 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwd6083f90/images/large/Flushable-Wipes/lifestyle/Flushable%20Wipes_wipes_benefit_graphic.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },

    {
      id: 5,
      tag: 'BEST VALUE',
      name: "Dipaers + Wipes Subscription",
      price: "$̶1̶1̶1̶.̶5̶9̶  $89.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw63b0915d/images/large/Dry-Wipes/restage-2023/DryWipes_192.jpeg?sw=400&sh=400&sm=fit",
        image1 : 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0c170ea1/images/large/Clean-Conscious-Wipes/Group-60-Count/MultiSKU_CCWipes_60ct_Group_On_Canvas.jpg?sw=400&sh=400&sm=fit',
        image2:'',
        comment:'4 scents'
    },
    {
      id: 6,
      tag: '',
      name: "Diaper Box",
      price: "$̶6̶4̶.̶9̶5̶ $59.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw31076f41/images/large/all-wipes-evergreen-campaign/sanitizing/SANITIZING_STACK.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw5b1805a6/images/large/all-wipes-evergreen-campaign/benefit/NOURISH_HYDRATE_INGREDIENT_0003.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'2 pack options'
    },
    {
      id: 7,
      tag: '',
      name: "Overnight Diaper Box",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwf1126793/images/large/Makeup-Remover-Wipes/restage-2022/B10MRWV2NO30S_MakeupRemoverFacialWipes_30ct_front_canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw567f529c/images/large/Benefit-Wipes/Calm/Calm_lifestyle.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },
    {
      id: 9,
      tag: '',
      name: "Training Pants Bundle",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwf1126793/images/large/Makeup-Remover-Wipes/restage-2022/B10MRWV2NO30S_MakeupRemoverFacialWipes_30ct_front_canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw567f529c/images/large/Benefit-Wipes/Calm/Calm_lifestyle.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },
    {
      id: 8,
      tag: '',
      name: "Makeup Remover Facial Wipes",
      price: "$7.99 - $19.99",
      image:
        "https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwf1126793/images/large/Makeup-Remover-Wipes/restage-2022/B10MRWV2NO30S_MakeupRemoverFacialWipes_30ct_front_canvas.jpg?sw=400&sh=400&sm=fit",
        image1: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw567f529c/images/large/Benefit-Wipes/Calm/Calm_lifestyle.jpg?sw=2000&sh=2000&sm=fit',
        image2: '',
        comment:'4 scents'
    },
  ];
  return (
    <div>
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