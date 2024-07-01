import { IcoCheck, IcoCopy } from '@/assets/icons';
import { copyButton } from '@/styles';

type Props = {
	onClick: () => void;
	copyState: boolean;
};

export default function CopyButton({ onClick, copyState }: Props) {
	return (
		<button className={copyButton} onClick={onClick}>
			{copyState ? <IcoCheck /> : <IcoCopy />}
		</button>
	);
}
