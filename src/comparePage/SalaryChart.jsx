import {ResponsiveBar} from '@nivo/bar';
import styled from 'styled-components';

const colors = {
  salary: '#4876EF',
  average: '#D7DCE5',
};
const getColor = (bar) => colors[bar.id];

const data = [{company: '평균 연봉', average: 4000}];
const data1 = [{company: 'A', salary: 3600}];

const SalaryChart = () => {
  return (
    <ChartBox>
      <ChartDivider>
        <ResponsiveBar
          data={data}
          maxValue={6000} // 동적으로 변경 필요
          enableGridY={false}
          enableLabel={false}
          axisBottom={null}
          axisLeft={null}
          margin={{left: 40, right: 40}}
          keys={['salary', 'average']}
          colors={getColor}
          indexBy="company"
        />
      </ChartDivider>
      <ChartDivider>
        <ResponsiveBar
          data={data1}
          maxValue={6000} // 동적으로 변경 필요
          enableGridY={false}
          enableLabel={false}
          axisBottom={null}
          axisLeft={null}
          margin={{left: 40, right: 40}}
          keys={['salary', 'average']}
          colors={getColor}
          indexBy="company"
        />
      </ChartDivider>
    </ChartBox>
  );
};

const ChartBox = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid #d7dce5;
`;

const ChartDivider = styled.div`
  width: 130px;
  height: 130px;
`;

export default SalaryChart;
