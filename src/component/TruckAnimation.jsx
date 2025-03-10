const TruckAnimation = () => {
    return (
      <div className="absolute bottom-0 right-0 w-full h-20 opacity-80 overflow-hidden">
        <div className="animate-truck-move">
          <svg viewBox="0 0 640 512" className="w-24 h-24 text-slate-500" fill="currentColor">
            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9l-76.8-76.8c-9-9-21.2-14.1-33.9-14.1H408V69.99C408 56.82 397.2 45.1 384 45.1H112C98.75 45.1 88 56.82 88 69.99v282l-24 24c-5.641 5.641-8.127 13.37-6.719 20.95C58.75 404.7 65.84 410.7 74.23 411.1c21.84 2.781 40.72 15.04 51.91 32.89C136.6 461.1 156.3 472 177.3 472c20.89 0 40.53-10.85 51.07-28.07c19.44 4.723 39.91 4.74 59.36 0C298.3 461.1 317.8 472 338.6 472c20.95 0 40.58-10.86 51.12-28.12c19.45 4.73 39.93 4.74 59.39 0C459.7 461.1 479.3 472 500.2 472c21.03 0 40.7-10.92 51.31-28.08c11.18-17.85 30.06-30.12 51.91-32.89c8.391-1.062 15.5-7.132 17.02-15.47c1.484-8.352-1.141-16.9-7.09-22.29L592 352H624c8.844 0 16-7.156 16-16S632.8 352 624 352zM120 95.1h240v32h-240V95.1zM120 159.1h240v48H120V159.1zM496 287.1H120v-48h376V287.1zM376 191.1H120v-48h256V191.1zM538.4 383.6c-31.06 3.935-57.25 24.1-72.11 51.91C458.5 445.7 448.1 448 438.7 448s-19.77-2.285-27.56-12.48c-4.953-6.531-12.49-10.35-20.54-10.35c-2.531 0-5.094 .3906-7.594 1.203c-12.06 3.891-24.16 5.828-36.25 5.828c-12.06 0-24.19-1.938-36.25-5.828c-2.5-1.156-5.062-1.547-7.594-1.203c-7.984 .3906-15.39 4.141-20.25 10.55C274.8 445.7 264.4 448 254.4 448c-10.08 0-20.53-2.285-28.33-12.48c-4.906-6.531-12.44-10.35-20.49-10.35c-2.531 0-5.094 .3906-7.594 1.203C186 430.3 173.9 432.2 161.8 432.2c-12.06 0-24.19-1.937-36.25-5.828c-2.5-1.156-5.062-1.547-7.594-1.203c-8.031 .3906-15.44 4.203-20.34 10.61C89.81 445.7 79.36 448 69.28 448c-10.8 0-20.38-2.812-28.16-12.09c-3.273-3.897-8.781-5.023-13.34-2.677c-4.609 2.227-7.086 7.461-5.867 12.45c.4219 1.797 1.211 3.488 2.102 5.117C34.09 468.8 50.94 479.1 69.28 479.1c17.42 0 33.83-9.344 43.23-24.46c13.91 4.297 28.11 6.469 42.3 6.469c14.19 0 28.39-2.172 42.3-6.469C206.5 470.7 222.8 479.1 240.1 479.1c17.42 0 33.83-9.344 43.23-24.46c13.91 4.297 28.11 6.469 42.3 6.469c14.19 0 28.39-2.172 42.3-6.469C377.3 470.7 393.6 479.1 411 479.1c17.44 0 33.75-9.267 43.2-24.43c13.94 4.313 28.17 6.484 42.39 6.484c14.23 0 28.45-2.172 42.39-6.484c9.5 15.16 25.92 24.43 43.23 24.43c18.34 0 35.19-11.13 45.26-29.18c1.008-1.782 1.797-3.64 2.25-5.591c1.078-4.763-1.328-9.79-5.781-12.02C562.1 427.2 550.3 381.8 538.4 383.6z" />
          </svg>
        </div>
      </div>
    );
  };
  
  export default TruckAnimation;
  