// types.ts
export interface TooltipProps {
    children: React.ReactNode;
    text: string | null;
  }
  
  export interface TopbarProps {
    onSidebarToggle: () => void;
    isSidebarCollapsed: boolean;
  }
  
  export interface SidebarProps {
    isCollapsed: boolean;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
    
  }
  
  export interface FileUploadProps {
    onFileSelect: (file: File) => void;
  }
  
  export interface LayoutProps {
    children: React.ReactNode;
  }