import '../../styles/atoms/avatar.css';

interface AvatarProps {
  src: string
  alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return <img className="avatar" src={src} alt={alt} />;
};

export default Avatar;
