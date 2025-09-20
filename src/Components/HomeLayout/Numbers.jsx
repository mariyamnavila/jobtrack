import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";


function AnimatedNumber({ n }) {
  const { ref, inView } = useInView({
    threshold: 0.3,   
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      <animated.span>{number.to((num) => num.toFixed(0))}</animated.span>
    </div>
  );
}

const Numbers = () => {
    return (
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-20">
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-primary text-5xl font-bold flex" ><AnimatedNumber n={25}/> K+</h2>
                <p className="text-[#1d553c] text-xl font-medium">Completed Cases</p>
                <p className="text-success text-center">We always provide people a <br /> complete solution upon focused of <br /> any business</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-primary text-5xl font-bold flex"> <AnimatedNumber n={17}/> +</h2>
                <p className="text-[#1d553c] text-xl font-medium">Our Office</p>
                <p className="text-success text-center">We always provide people a <br /> complete solution upon focused of <br /> any business</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-primary text-5xl font-bold flex"> <AnimatedNumber n={86}/> +</h2>
                <p className="text-[#1d553c] text-xl font-medium">Skilled People</p>
                <p className="text-success text-center">We always provide people  a<br /> complete solution upon focused of <br /> any business</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-primary text-5xl font-bold flex"> <AnimatedNumber n={28}/> +</h2>
                <p className="text-[#1d553c] text-xl font-medium">Happy Clients</p>
                <p className="text-success text-center">We always provide people  a<br /> complete solution upon focused of <br /> any business</p>
            </div>
        </div>
    );
};

export default Numbers;