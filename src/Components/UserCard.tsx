const UserCard = ({
  name,
  role,
  path,
}: {
  name: string;
  role: string;
  path: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 rounded-full border-2 border-my-primary overflow-hidden">
        <img
          src={path}
          alt="user-picture"
          className="object-cover inline-block"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <p className="text-xs">{role}</p>
      </div>
    </div>
  );
};

export default UserCard;
