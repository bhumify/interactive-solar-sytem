"use client";

type PlanetProps = {
  size:number;
  orbitSize:number;
  color:string;
  speed:number;
  name:string;
  onClick:()=>void;
};

export default function Planet({
  size,
  orbitSize,
  color,
  speed,
  name,
  onClick,
}:PlanetProps){
  return(
    <div
    className="absolute top-1/2 left-1/2"
    style={{
      width:orbitSize,
      height:orbitSize,
      marginLeft:-orbitSize/2,
      marginTop:-orbitSize/2,
      animation:`spin ${speed}s linear infinite`,
    }} 
    >

      <div className="absolute inset-0 rounded-full border border-white/10"/>


      <div
      onClick={onClick}
      className="absolute rounded-full cursor-pointer"
      style={{
        width:size,
        height:size,
        backgroundColor:color,
        left:orbitSize/2-size/2,
        top:-size/2,
        marginTop:-size/2,
        marginLeft:-size/2,
      }}
      title={name}     
      />
    </div>
  );
}
