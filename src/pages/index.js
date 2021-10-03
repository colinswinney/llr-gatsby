import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Header from '../components/header'
import Main from '../components/main'
import Container from '../components/shared/container'

const IndexPage = () => {
  return (
		<Layout pageTitle="Home | Long Line Riders">
			<Header>
				<Container>
					<StaticImage
						alt="The Long Line Riders laughing and playing"
						src="../images/long-line-riders-laughing-no-text.png"
						width={1600}
						height={1081}
						className="home-image"
					/>

					<Header.Heading>Long Line Riders</Header.Heading>
					<Header.SubHeading>America's only country band</Header.SubHeading>
				</Container>
			</Header>
			<Main>main</Main>
		</Layout>
	);
}

export default IndexPage