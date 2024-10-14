import Diff from "./Diff";

export default function MainRight() {
    const diffs = [
        {
          id: "01",
          title: "Track company-wide progress",
          text: "See how your day-to-day tasks fit into the wider vision. Go from tracking at the mileostone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        },
        {
          id: "02",
          title: "Advenced built-in reports",
          text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
        },
        {
          id: "03",
          title: "Everything you need in one place",
          text: "Stop jumping from one service to another to communicaten store files, track tasks ans share documents. Manage offers an all-in-one team pructivity solution.",
        },
      ];

    return (
        <div className="
          px-5
          sm:px-0
          sm:w-1/2
          sm:ml-10"
        >
            {
                diffs.map((diff, index) => (
                    <Diff 
                        num={diff.id}
                        title={diff.title}
                        text={diff.text}
                        key={index}
                    />
                ))
            }
        </div>
    )
}