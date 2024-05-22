import Avatar from '../atoms/Avatar';
import Text from '../atoms/Text';
import '../../styles/molecules/user-info.css';

interface UserInfoProps {
    name: string;
    bio: string;
    avatarSrc: string;
}

const UserInfo = ({ name, bio, avatarSrc }: UserInfoProps) => {
    return (
        <div className="user-info">
            <Avatar src={avatarSrc} alt={name} />
            <Text type="h1">{name}</Text>
            <Text type="p">{bio}</Text>
        </div>
    );
};

export default UserInfo;
