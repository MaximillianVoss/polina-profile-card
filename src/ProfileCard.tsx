export type ProfileCardProps = {
  name: string;
  age: number;
  showDetails: boolean;
};

export default function ProfileCard({
  name,
  age,
  showDetails,
}: ProfileCardProps) {
  return (
    <article aria-label={`Profile for ${name}`} className="profile-card">
      <h2>{name}</h2>
      {showDetails === true ? <p>Age: {age}</p> : null}
    </article>
  );
}
