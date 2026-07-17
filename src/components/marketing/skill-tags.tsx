interface SkillGroup {
  label: string;
  skills: string[];
}

export function SkillTags({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="flex flex-col gap-7">
      {groups.map((group, i) => (
        <div
          key={group.label}
          className="animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500 motion-reduce:animate-none"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <h4 className="text-light-gray-70 text-[11px] font-medium uppercase tracking-[0.14em] mb-3">
            {group.label}
          </h4>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="bg-onyx border border-jet text-light-gray text-[12.5px] font-mono px-3 py-1.5 rounded-full leading-none"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
