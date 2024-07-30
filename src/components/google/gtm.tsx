import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

const GTM_ID = 'G-KVFZPKWRTC';

const gtmScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GTM_ID}');
`;

export default function Gtm() {
	return (
		process.env.NODE_ENV === 'production' && (
			<>
				<GoogleTagManager gtmId={GTM_ID} />
				<Script
					id='gtag-init'
					dangerouslySetInnerHTML={{ __html: gtmScript }}
				/>
			</>
		)
	);
}
