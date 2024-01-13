 

export function MaterialInputSeip(props) {
    const { label } = props;

    return (
        <>
            <div className="material-input-container-seip">
                <input className="material-input-seip" {...props} />
                <label htmlFor={props.id} className="material-input-label-seip">{label}</label>
            </div>
        </>
    );
}
export function InputSeip(props) {
    return (
        <input {...props} className="material-input-seip"></input>
    );
}
function ButtonSeip({ label, cN, onClick }) {
    ButtonSeip.defaultProps = {
        onClick: undefined,
    };
    return (
        <>
            <button className={`material-button-seip-${cN}`}
                onClick={onClick}  >
                {label}
            </button>
        </>
    );

}

export function ButtonSeipPrimary({ label, onClick }) {
    return <ButtonSeip label={label} onClick={onClick} cN={'primary'} />;
}
export function ButtonSeipError({ label, onClick }) {
    return <ButtonSeip label={label} onClick={onClick} cN={'red'} />;
}

export function ButtonSeipSecondary({ label, onClick }) {
    return <ButtonSeip label={label} onClick={onClick} cN={'pink'} />;
}

export function ContainerSeip({ children }) {
    return (<div className='container-seip' >{children}</div>);
}

export function RowSeip({ children }) {
    return <div className="row-seip">{children}</div>
}
export function ColumnSeip({ size, children }) {
   return <div className={`column-seip ${size}}`}>{children}</div>;
};

export function ContainerAlingSeip({ children }) {
    return <div className="container-aling-seip">{children}</div>;
}
export function LeftSeip({ children }) {
    return <div className="left-seip">{children}</div>
}

export function RightSeip({ children }) {
    return <div className="right-seip">{children}</div>
}

export function CenterSeip({ children }) {
    return <div className="center-seip">{children}</div>
}