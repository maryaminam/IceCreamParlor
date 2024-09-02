import './Header.css'
import menu from '../../assets/menu.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Ice Cream – A Delightful Treat Awaits</h2>
        <p>Discover a world of flavors all in one place. Our menu features a wide variety of ice cream options to suit every taste. From timeless favorites to innovative new creations, you’re sure to find something to delight your taste buds. Browse our selection and find the perfect treat to satisfy your cravings.</p>
        <a href={menu} download>
          <button >View Menu</button>
        </a>
      </div>
    </div>
  )
}

export default Header
