
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: 'claude',
    type: 'custom',
    data: { 
      label: 'Claude',
      color: '#F97316',
      size: 'lg',
    },
    position: { x: 400, y: 300 },
  },
  {
    id: 'core-memory',
    type: 'custom',
    data: { 
      label: 'Core Memory',
      color: '#0EA5E9',
      children: ['sqlite', 'memory', 'obsidian'],
    },
    position: { x: 400, y: 100 },
  },
  {
    id: 'sqlite',
    type: 'custom',
    data: { 
      label: 'SQLite',
      color: '#0EA5E9',
      size: 'sm',
    },
    position: { x: 300, y: 0 },
  },
  // ... Add other nodes similar to the screenshot
];

const initialEdges = [
  { id: 'e1-2', source: 'claude', target: 'core-memory' },
  { id: 'e2-3', source: 'core-memory', target: 'sqlite' },
  // ... Add other edges
];

function CustomNode({ data }) {
  const nodeSize = data.size === 'lg' ? 'w-32 h-32' : 
                  data.size === 'md' ? 'w-24 h-24' : 'w-20 h-20';
                  
  return (
    <div 
      className={`flex items-center justify-center rounded-full cursor-pointer
                 transition-transform hover:scale-105 ${nodeSize}`}
      style={{ 
        backgroundColor: `${data.color}20`,
        borderColor: data.color,
        borderWidth: '2px',
        color: data.color,
      }}
    >
      <div className="text-center font-medium">
        {data.label}
      </div>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

export function KnowledgeGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      className="bg-[#0A0F1E]"
    >
      <Background color="#2A2F3E" />
      <Controls className="bg-chat-light/10" />
      <MiniMap 
        nodeColor={(node) => node.data.color + "40"}
        maskColor="rgb(10, 15, 30, 0.8)"
        className="!bg-transparent"
      />
    </ReactFlow>
  );
}
