import "./Slide.css"

const teamMembers = [
  { name: "Emily Kim", role: "Founder", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Michael Steward", role: "Creative Director", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Emma Rodriguez", role: "Lead Developer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww" },
  { name: "Julia Gimmel", role: "UX Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww" },
  { name: "Lisa Anderson", role: "Marketing Manager", image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "James Wilson", role: "Product Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const TeamMemberCard = ({ member, index, currentIndex }) => {
  const cardsLength = teamMembers.length;
  const offset = (index - currentIndex + cardsLength) % cardsLength;
  let className = "card";

  if (offset === 0) className += " center";
  else if (offset === 1) className += " right-1";
  else if (offset === 2) className += " right-2";
  else if (offset === cardsLength - 1) className += " left-1";
  else if (offset === cardsLength - 2) className += " left-2";
  else className += " hidden";

  return (
    <div className={className} data-index={index} onClick={() => handleCardClick(index)}>
      <img src={member.image} alt={member.name} />
    </div>
  );
};

export default TeamMemberCard