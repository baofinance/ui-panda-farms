import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
	return (
		<StyledNav>
			<StyledLink
				target="_blank"
				href="https://bscscan.com/address/0x9942cb4c6180820E6211183ab29831641F58577A"
			>
				PandaChef Contract
			</StyledLink>
			<StyledLink
				target="_blank"
				href="https://www.immunefi.com/bounty/baofinance"
			>
				Bug Bounty Program
			</StyledLink>
			<StyledLink target="_blank" href="https://discord.gg/BW3P62vJXT">
				Discord
			</StyledLink>
			<StyledLink target="_blank" href="https://twitter.com/thebaoman">
				Twitter
			</StyledLink>
			<StyledLink target="_blank" href="https://thebaoman.medium.com/">
				Medium
			</StyledLink>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
	font-weight: 600;
`

const StyledLink = styled.a`
	color: ${(props) => props.theme.color.grey[400]};
	padding-left: ${(props) => props.theme.spacing[5]}px;
	padding-right: ${(props) => props.theme.spacing[5]}px;
	text-decoration: none;
	&:hover {
		color: ${(props) => props.theme.color.grey[500]};
	}
`

export default Nav
