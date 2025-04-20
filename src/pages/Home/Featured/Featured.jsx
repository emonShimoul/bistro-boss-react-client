import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-6 my-20">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Apr 20, 2025</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            inventore hic dolores totam! Exercitationem ipsum doloribus nobis,
            nihil reiciendis facere fuga tempora cupiditate harum eos sint earum
            distinctio dicta obcaecati quidem veritatis incidunt sed vero
            pariatur illo illum inventore! Reiciendis, earum facere? Autem
            deserunt illo atque magni animi quos sapiente.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
