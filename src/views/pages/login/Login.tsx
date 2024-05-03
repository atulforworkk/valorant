import { useState } from "react";
import { Button } from "@/components/ui/button";
import agents from "../../../info/info";
function Login() {
  const [agentList, setAgentList] = useState([]);
  console.log("🚀 ~ Login ~ agentList:", agentList);
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 23);
  };

  const pushUniqueRandomNumbers = () => {
    let uniqueNumbers: any = [];
    while (uniqueNumbers.length < 5) {
      let randomNumber = getRandomNumber();
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    return uniqueNumbers;
  };

  const showAgents = () => {
    const randomNumber = pushUniqueRandomNumbers();
    let random;
    let RandomAgent: any = [];
    for (let i = 0; i < 5; i++) {
      random = randomNumber[i];
      RandomAgent.push(agents[random]);
    }
    return RandomAgent;
  };
  let guessAgent: any = [];
  const handleClick = () => {
    guessAgent = showAgents();
    setAgentList(guessAgent);
  };
  return (
    <div className="flex min-h-[90vh]">
      <div className="flex justify-center items-center w-full flex-col bg-cyan-300">
        <Button onClick={handleClick} className="w-52">
          click to get your team ready
        </Button>
        <ul>
          {agentList.map((agent, index) => (
            <li key={agent}>
              Player :{index + 1} will pick {agent["name"]}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Login;
