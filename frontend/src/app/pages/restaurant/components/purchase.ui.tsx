import "./purchase.ui.css"

type PurchaseUIProps = { children: React.ReactNode, onPurchase: () => void }

export const PurchaseUI = ({ children, onPurchase }: PurchaseUIProps) => {
    return <div className="purchase-item">
        {children}
        <button className="purchase-button" onClick={onPurchase}>Buy</button>
    </div>
}