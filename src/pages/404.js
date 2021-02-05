import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script
				type={"type"}
				async={true}
				src={"src"}
				crossorigin={"crossorigin"}
				integrity={"integrity"}
				referrerpolicy={"referrepolicy"}
				place={"endOfHead"}
				rawKey={"601cf03dacb0cec8ca530951"}
			>
				{"console.log(\"Тест\")"}
			</script>
			<link
				href={"https://fonts.googleapis.com"}
				rel={"stylesheet"}
				sizes={"20px"}
				type={"font"}
				media={"all"}
				as={"some info"}
				crossorigin={"crossorigin"}
				place={"endOfHead"}
				rawKey={"601cf0850944c313377c5649"}
			/>
			<meta
				charset={"utf-8"}
				name={"keywords"}
				content={"ключевые значения "}
				http-equiv={"some link"}
				itemprop={"some props"}
				place={"endOfHead"}
				rawKey={"601cf11c27348f1591977a02"}
			/>
		</RawHtml>
	</Theme>;
});