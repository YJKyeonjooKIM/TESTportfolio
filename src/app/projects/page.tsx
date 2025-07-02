import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "프로젝트 1",
      description: "프로젝트에 대한 상세 설명을 적어주세요.",
      imageUrl: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com"
    },
    // 더 많은 프로젝트를 추가할 수 있습니다
  ]

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">프로젝트</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
} 