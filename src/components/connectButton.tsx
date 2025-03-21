import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const ConnectButtonCustom = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
  mounted,
}) => {
  return (
    <div>
      {(() => {
        if (!mounted || !account || !chain) {
          return (
            <ConnectButton />
          );
        }

        if (chain.unsupported) {
          return (
            <button onClick={openChainModal} type="button">
              Wrong network
            </button>
          );
        }

        return (
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={openChainModal}
              style={{ display: 'flex', alignItems: 'center' }}
              type="button"
            >
              {chain.hasIcon && (
                <div
                  style={{
                    background: chain.iconBackground,
                    width: 18,
                    height: 18,
                    borderRadius: 999,
                    overflow: 'hidden',
                    marginRight: 4,
                  }}
                >
                  {chain.iconUrl && (
                    <Image
                      alt={chain.name ?? 'Chain icon'}
                      src={chain.iconUrl}
                      width={18}
                      height={18}
                    />
                  )}
                </div>
              )}
              {chain.name}
            </button>

            <button onClick={openAccountModal} type="button">
              {/* {account.displayName} */}
              {account.displayBalance
                ? `Balance: ${account.displayBalance}`
                : ''}
            </button>
          </div>
        );
      })()}
    </div>
      );
    }}
    </ConnectButton.Custom>
  );
}

export default ConnectButtonCustom;