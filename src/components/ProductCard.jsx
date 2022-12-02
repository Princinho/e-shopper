export default ({ name, description, subtitle, imageUrl }) => {
    return (<div className="product-card">
        <div className="product-card-image-container">
            <img className="product-card-image" alt="" src={imageUrl || "https://images.unsplash.com/photo-1514651029128-173d2e6ea851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80"} />
        </div>
        <div className="product-details-container">
            <h1 className="product-title" title={name}>{name}</h1>
            <h2 className="product-subtitle" title={subtitle}>{subtitle}</h2>
            <p className="product-description" title={description}>{description}</p>
        </div>
    </div>)
}