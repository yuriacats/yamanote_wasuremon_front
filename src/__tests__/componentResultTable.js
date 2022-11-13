import React from 'react';
import { NomalColumns } from '../component/ResultTable';

const forColumsJson = {
    stationName: "hoge",
    arrivelTime: "03:00"
}

describe('NomalColums', () => {
    it.todo('JsonでパースしてきたObjectをtdに変換する');
    expect(NomalColumns(forColumsJson)).toEqual((
        <tr>
            <td className="station-name">hoge</td>
            <td className="arrival-time">03:00</td>
        </tr>
    ))
})
