const persons = [
  {
    id: 1,
    img: "../images/avatar-anisha.png",
    nom: "Anisha Li",
    description: `"Manage has supercharged our teams's workflow. The ablity to maintain visibility on larger milestones at all times keeps everyone motivated."`,
  },
  {
    id: 2,
    img: "../images/avatar-ali.png",
    nom: "Ali Bravo",
    description: `"We have been able to cancel so many other subscriptions since using Manage. Ther is no more cross-channel confusion and everyone is much more focused."`,
  },
  {
    id: 3,
    img: "../images/avatar-richard.png",
    nom: "Richard Watts",
    description: `"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!"`,
  },
  {
    id: 4,
    img: "../images/avatar-shanai.png",
    nom: "Shanai Gough",
    description: `"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`,
  },
];

export default function Carousel() {
  return (
    <div
      className="
      w-screen
      overflow-hidden
      flex
      overflow-x-scroll
      "
    >
      {persons.map((person) => (
        <div
          className=" 
            flex
            flex-col
            items-center
            
            border 
            border-solid 
            border-gray-300
            rounded-2xl
            
            w-4/5
            bg-[#fafafa]
            p-5
            relative
            m-7
            flex-shrink-0

            sm:w-1/3
            "
          key={person.id}
        >
          <div
            className="
            absolute
            top-0
            left-1/2
            translate-x-[-50%]
            translate-y-[-50%]
            "
          >
            <img
              src={person.img}
              alt=""
              className="
                w-14"
            />
          </div>
          <div
            className="
              font-bold
              my-4"
          >
            {person.nom}
          </div>
          <div className="
            text-center
            text-secondary"
          >
            {person.description}
          </div>
        </div>
      ))}
    </div>
  );
}
