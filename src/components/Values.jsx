import Image from '../images/values.jpg'
import SelectionHead from './SelectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
	 <section className='value'>
		<div className="container values__container">
			<div className="value__left">
				<div className="values__image">
						<img src={Image} alt="Values Images"/>
				</div>
			</div>
			<div className="values__right">
				<SelectionHead icon={<GiCutDiamond/>} title="Values"/>
				<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus eros arcu.
				</p>
				<div className="values__wrapper">
					{
						values.map(({id, icon, title, desc}) => {
							return <Card key={id} className="values__value">
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{desc}</small>
							</Card>
						})
					}
				</div>
			</div>
		</div>
	 </section>
  )
}

export default Values