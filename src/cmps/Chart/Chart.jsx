import { Sparklines, SparklinesLine, SparklinesNormalBand, SparklinesSpots } from 'react-sparklines';
import './Chart.scss';
export function Chart({ data, title }) {
    return (
        data && (
            <div className="chart">
                <h3>{title}</h3>
                <Sparklines data={data} width={200} >
                    <SparklinesLine style={{ stroke: 'orange', fill: 'none' }} />
                    <SparklinesSpots style={{ stroke: 'darkRed', fill: 'darkRed' }} />
                    <SparklinesNormalBand height={'200'} style={{ fill: 'darkOrange', fillOpacity: 0.1 }} />
                </Sparklines>
            </div>
        )
    );
}
