import NavBar from "../components/NavBar";
import GroupList from "../components/GroupList";

const Group = () => {
  return (
    <div className="w-full h-screen">
      <NavBar page="Grupos" />
      <GroupList />
    </div>
  );
};

export default Group;
