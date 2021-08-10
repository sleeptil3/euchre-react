import { useContext } from 'react';
import { DataContext } from '../Pages/Game';


export default function TrumpIndicator() {
	const { trump, matchStage, matchTricks } = useContext(DataContext)

	const heartSVG = <svg className="w-8 h-8" width="141" height="145" viewBox="0 0 141 145" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M69.8763 144.798C60.7163 127.658 47.2062 114.798 35.1362 100.868C29.1962 93.9878 23.1363 87.2378 17.5363 80.0478C10.3863 70.8178 4.15625 60.9378 1.53625 49.3478C-0.353748 41.0478 -0.823748 32.6578 1.99625 24.4078C7.38625 8.52784 22.7163 -0.752161 35.9963 0.0478388C51.6462 0.997839 64.5363 11.1178 68.9963 26.9178C69.3163 28.0778 69.6263 29.2378 70.1663 31.1878C70.6263 29.6878 70.9063 28.9178 71.1063 28.1278C74.7063 13.3778 86.8463 2.12784 100.946 0.517839C116.506 -1.27216 130.086 6.15784 137.266 20.3678C141.376 28.4978 140.856 36.9978 139.346 45.5678C136.816 59.8778 129.346 71.7778 120.406 82.7778C113.096 91.7778 105.106 100.328 97.4063 109.028C87.4863 120.128 76.9963 130.708 69.8763 144.798Z" fill="white" />
	</svg>

	const clubSVG = <svg className="w-8 h-8" width="159" height="164" viewBox="0 0 159 164" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M90.0029 81.4086C93.7929 78.4086 97.5629 75.2885 101.383 72.2785C112.613 63.4085 125.023 60.4885 138.383 66.2785C154.683 73.2785 160.843 86.2786 158.073 104.159C155.843 118.819 142.003 130.449 127.003 131.349C122.243 131.719 117.457 131.142 112.922 129.65C108.387 128.158 104.193 125.782 100.583 122.659C95.6729 118.559 90.2829 115.049 85.1129 111.269L84.1829 111.719C84.7329 115.329 84.9229 119.049 85.9029 122.539C87.9029 129.759 89.8329 137.099 92.7829 143.959C97.0629 153.879 102.063 157.959 114.153 163.509H43.6129C53.0829 161.349 59.2629 155.769 63.9829 148.379C69.0929 140.379 71.5029 131.379 73.1629 122.219C73.8129 118.649 74.2429 115.039 74.9429 110.349C72.2829 112.029 70.3629 113.019 68.6929 114.349C64.6929 117.499 60.8129 120.819 56.8429 124.019C37.5829 139.529 8.23292 130.819 1.39292 107.579C-0.734481 100.343 -0.417907 92.6082 2.29365 85.5708C5.00521 78.5334 9.96057 72.5859 16.3929 68.6486C23.0869 64.5943 30.9338 62.8677 38.7113 63.7377C46.4888 64.6077 53.7602 68.0254 59.3929 73.4585C62.3929 76.3385 65.5029 79.0886 68.5629 81.8986L69.8629 80.8986C67.0529 75.8986 64.5729 70.6486 61.3429 65.8986C58.3429 61.5186 54.4429 57.7986 51.2129 53.5786C39.5129 38.2386 43.2129 15.9985 59.1329 5.66855C78.8029 -7.14145 107.003 2.83855 112.663 24.7786C115.563 36.0886 113.663 46.5885 105.533 55.4585C99.5929 61.9985 94.2829 68.8686 90.8829 77.0786C90.3429 78.3686 89.7929 79.6486 89.2529 80.9386L90.0029 81.4086Z" fill="white" />
	</svg>

	const diamondSVG = <svg className="w-8 h-8" width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M159 76.9034C117.955 90.5551 91.7165 117.33 79.7786 159C67.4589 117.319 41.2719 90.1819 0 77.0485C1.33102 76.2296 2.41441 75.5558 3.50811 74.9132C12.6705 69.5022 21.9773 64.3194 30.9539 58.639C46.9055 48.5635 59.4728 34.9118 69.9662 19.415C73.9696 13.5273 76.5078 6.66517 79.8302 0C86.2583 17.7358 95.3071 34.3209 109.102 47.9726C122.897 61.6243 139.427 71.0364 159 76.9034Z" fill="white" />
	</svg>

	const spadeSVG = <svg className="w-8 h-8" width="145" height="169" viewBox="0 0 145 169" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M144.246 95.5775C142.854 102.663 139.987 108.882 134.613 114.008C120.102 127.838 96.5358 128.014 82.0144 114.183C80.983 113.152 79.8795 112.203 78.8172 111.213L77.6518 111.656C80.1167 121.083 82.3651 130.561 85.1085 139.895C86.4547 144.14 88.2202 148.241 90.3787 152.137C94.2256 159.356 99.5371 165.225 107.52 168.525H36.6452C51.9195 162.058 56.5709 148.238 60.9129 134.429C62.8931 128.137 63.8317 121.516 65.1827 115.039C65.2703 114.192 65.2703 113.339 65.1827 112.492C61.408 115.049 57.9633 117.855 54.0647 119.948C35.0879 130.179 10.5623 122.393 2.49711 103.447C-0.947604 95.1856 -0.00907302 86.646 3.15718 78.3951C7.1382 68.0816 13.9554 59.6142 21.6596 51.8687C27.8478 45.6291 34.2937 39.5956 40.6468 33.5107C46.2574 28.127 52.1155 22.9805 57.4991 17.3803C62.8828 11.7801 67.6167 5.95291 72.8044 0.0123215C72.7322 -0.0495597 73.1448 0.12577 73.3614 0.44549C81.014 12.007 91.2347 21.186 101.259 30.5713C108.427 37.2957 115.585 44.0614 122.495 51.054C132.994 61.6872 141.369 73.6303 144.246 88.6983V95.5775Z" fill="white" />
	</svg>

	if (matchStage === "RESULT" && (matchTricks.callingTeam + matchTricks.opposingTeam === 5)) return null
	else return (
		<div className="absolute bottom-10 right-10 flex flex-col justify-center items-center pb-2 px-2 border-2 border-white text-white opacity-60 rounded-lg">
			<h1 className="text-md text-center font-light mb-1">Trump</h1>
			{trump.code === "h" ? heartSVG
				: trump.code === "c" ? clubSVG
					: trump.code === "d" ? diamondSVG
						: spadeSVG
			}
		</div>
	)
}
