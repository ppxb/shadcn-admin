import { z } from 'zod'

import { DataTable } from '~/components/custom/data-table'

import { taskColumns } from './table/task-columns'
import { taskData } from './table/task-data'
import { taskSchema } from './table/task-schema'

function getTasks() {
  return z.array(taskSchema).parse(taskData)
}

export default function MeetingsList() {
  const tasks = getTasks()

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">会议列表管理</div>
          <p className="text-sm text-muted-foreground md:text-base">您可以在此页面对所有会议进行管理，如更新或创建</p>
        </div>
        <DataTable data={tasks} columns={taskColumns} />
      </div>
    </div>
  )
}
