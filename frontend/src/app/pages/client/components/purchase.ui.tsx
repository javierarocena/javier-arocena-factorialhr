type PurchaseUIProps = { children: React.ReactNode, onPurchase: () => void }

export const PurchaseUI = ({ children, onPurchase }: PurchaseUIProps) => {
    return <div>
        {children}
        <button onClick={onPurchase}>Buy</button>
    </div>
}