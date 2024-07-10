import Script from 'next/script';

const giscusTheme = 'noborder_light';

export default function Giscus() {
	return (
		<>
			<Script
				src='https://giscus.app/client.js'
				data-repo='hyesuhong/sudotlog'
				data-repo-id='R_kgDOL5KkyQ'
				data-category='General'
				data-category-id='DIC_kwDOL5Kkyc4Cgqm9'
				data-mapping='pathname'
				data-strict='0'
				data-reactions-enabled='1'
				data-emit-metadata='0'
				data-input-position='top'
				data-theme={giscusTheme}
				data-lang='ko'
				// crossorigin='anonymous'
				async
			/>
			<section className='giscus' />
		</>
	);
}

/* 
DARK
- dark
- noborder_gray

LIGHT
- light
- noborder_light
*/
