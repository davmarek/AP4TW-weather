interface WeatherHourColumn {
  hour: string;
  temperature: number;
  rain: number;
  rainUnit?: string;
}

export default function WeatherHourColumn({
  hour,
  temperature,
  rain,
  rainUnit = 'mm',
}: WeatherHourColumn) {
  return (
    <div className="flex w-16 flex-col items-center gap-1">
      <div className="text-slate-400">{hour}</div>
      <div>{`${temperature}°`}</div>
      <div
        className={`${
          rain > 0 ? 'text-blue-300 opacity-80' : 'text-slate-500'
        }`}
      >
        {rain}
        <span className="text-xs">{rainUnit}</span>
      </div>
    </div>
  );
}
