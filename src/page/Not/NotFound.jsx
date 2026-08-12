
import FuzzyText from "./FuzzyText";

function NotFound() {
  return (
   <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"75vh",flexDirection:"column"}}>
     <FuzzyText baseIntensity={0.4} hoverIntensity={0.9} enableHover>
      404
    </FuzzyText>
     <FuzzyText baseIntensity={0.4} hoverIntensity={0.9} enableHover>
      Not Found
    </FuzzyText>
   </div>
  );
}

export default NotFound;
