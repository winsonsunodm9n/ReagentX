import { ExtensionContext } from 'vscode';
import { ExplorerConst } from '../constants';
import { ModelingExplorer } from '../interface';
import { ModelExpTree } from './model-exp/model-exp';
import { SystemTask } from './system-task/system-task';
import { TemplateExp } from './template-exp/template-exp';

// 已实例化的资源管理器
const explorers: Map<string, ModelingExplorer<unknown>> = new Map();

/**
 * 安装 资源管理器
 *
 * @author chitanda
 * @date 2021-11-30 10:11:47
 * @export
 * @param {ExtensionContext} context
 */
export function installExplorer(context: ExtensionContext): void {
  explorers.set(ExplorerConst.MODEL_EXP_TREE, new ModelExpTree(context));
  explorers.set(ExplorerConst.SYSTEM_TASK, new SystemTask(context));
  explorers.set(ExplorerConst.TEMPLATE_EXP_TREE, new TemplateExp(context));
}

/**
 * 获取模型导航管理器
 *
 * @author chitanda
 * @date 2021-12-22 15:12:19
 * @export
 * @return {*}  {ModelExpTree}
 */
export function getModelExpTree(): ModelExpTree {
  return explorers.get(ExplorerConst.MODEL_EXP_TREE) as ModelExpTree;
}

/**
 * 获取系统任务管理器
 *
 * @author chitanda
 * @date 2021-12-22 15:12:29
 * @export
 * @return {*}  {SystemTask}
 */
export function getSystemTask(): SystemTask {
  return explorers.get(ExplorerConst.MODEL_EXP_TREE) as SystemTask;
}

/**
 * 模板导航
 *
 * @author chitanda
 * @date 2022-01-21 11:01:01
 * @export
 * @return {*}  {TemplateExp}
 */
export function getTemplateExp(): TemplateExp {
  return explorers.get(ExplorerConst.TEMPLATE_EXP_TREE) as TemplateExp;
}

export { ModelExpTree, SystemTask };
